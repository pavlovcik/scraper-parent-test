import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { log } from "./scraper-kernel/src/logging";
import { createWriteStream } from "fs";
import unzip from "unzip-crx";

export async function metaMaskSetup(cliArgs) {
  const METAMASK = "metamask";
  const METAMASK_ZIP = "metamask.zip";

  const dirPath = cliArgs.metamask || path.join(__dirname, METAMASK); // no zip
  if (!fs.existsSync(dirPath)) {
    log.warn(`${dirPath} not found! Downloading...`);
    const zipPath = cliArgs.metamask?.concat(`.zip`) || path.join(__dirname, METAMASK_ZIP); // zip
    await downloadNewCopy(zipPath);
  } else {
    log.ok(`${dirPath} found!`);
  }
  return dirPath;
}

async function downloadNewCopy(zipPath: string) {
  const downloadUrl = await getMetaMaskLatestDownloadUrl();
  const download = await fetch(downloadUrl);
  if (!download.ok) {
    throw new Error(`Unexpected response ${download.statusText}`);
  }
  // @ts-expect-error
  await pipeline(download.body, createWriteStream(zipPath)); // save to disk

  const crxFile = zipPath;
  await unzip(crxFile);
  log.ok("Successfully unzipped your crx file..");
  return zipPath;
}

async function getMetaMaskLatestDownloadUrl() {
  const response = await fetch("https://api.github.com/repos/MetaMask/metamask-extension/releases/latest");
  const json = await response.json();
  const asset = json.assets.find((a) => a.name.includes("metamask-chrome"));
  return asset.browser_download_url;
}

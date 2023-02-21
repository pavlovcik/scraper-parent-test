import path from "path";
import { pipeline } from "stream/promises";
// import { unzip, unzipSync } from "zlib";
import fs from "fs";
import { log } from "./scraper-kernel/src/logging";

export async function metaMaskSetup(cliArgs) {
  const METAMASK = "metamask";
  const METAMASK_ZIP = "metamask.zip";

  const dirPath = cliArgs.metamask || path.join(__dirname, METAMASK); // no zip
  if (!fs.existsSync(dirPath)) {
    log.warn(`${dirPath} not found! Downloading...`);
    const zipPath = cliArgs.metamask?.concat(`.zip`) || path.join(__dirname, METAMASK_ZIP); // zip
    await downloadNewCopy(zipPath, dirPath);
  } else {
    log.ok(`${dirPath} found!`);
  }
  return dirPath;
}

import { createReadStream, createWriteStream } from "fs";
import unzip from "unzip-crx";

async function downloadNewCopy(zipPath: string, dirPath: string) {
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
}

async function getMetaMaskLatestDownloadUrl() {
  const response = await fetch("https://api.github.com/repos/MetaMask/metamask-extension/releases/latest");
  const json = await response.json();
  const asset = json.assets.find((a) => a.name.includes("metamask-chrome"));
  return asset.browser_download_url;
}

import path from "path";
import { pipeline } from "stream";
import { unzip, unzipSync } from "zlib";
import fs from "fs";
import { log } from "./scraper-kernel/src/logging";

export async function metaMaskSetup(cliArgs) {
  const METAMASK = "metamask";
  const METAMASK_ZIP = "metamask.zip";

  const metaMaskPath = cliArgs.metamask || path.join(__dirname, METAMASK); // no zip
  if (!fs.existsSync(metaMaskPath)) {
    log.warn(`${metaMaskPath} not found! Downloading...`);
    const downloadPath = cliArgs.metamask?.concat(`.zip`) || path.join(__dirname, METAMASK_ZIP); // zip
    await downloadNewCopy(downloadPath);
  } else {
    log.ok(`${metaMaskPath} found!`);
  }
  return metaMaskPath;
}

async function downloadNewCopy(downloadPath: string) {
  const downloadUrl = await getMetaMaskLatestDownloadUrl();
  const download = await fetch(downloadUrl);
  const destination = fs.createWriteStream(downloadPath);

  // @ts-expect-error
  pipeline(download.body, destination, (err) => {
    if (err) {
      console.error("Failed to download file", err);
    } else {
      console.log("File downloaded successfully");
      const buffer = fs.readFileSync(downloadPath);
      unzipSync(buffer);
    }
  });
}

async function getMetaMaskLatestDownloadUrl() {
  const response = await fetch("https://api.github.com/repos/MetaMask/metamask-extension/releases/latest");
  const json = await response.json();
  const asset = json.assets.find((a) => a.name.includes("metamask-chrome"));
  return asset.browser_download_url;
}

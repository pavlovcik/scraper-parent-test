import fs from "fs";
import path from "path";
import { log } from "./scraper-kernel/src/logging";

export async function setup(cliArgs) {
  const path = await metaMaskSetup();

  if (!cliArgs.table) {
    // no table has been specified

    // check if the table name has already been specified and saved to state.json
    // if not, then exit the process with an error

    if (fs.existsSync("./state.json")) {
      const state = JSON.parse(fs.readFileSync("./state.json", "utf8"));
      if (state.table) {
        cliArgs.table = state.table;
        log.info(`Using table "${state.table}" from state.json`);
      }
    } else {
      log.error(`No database table specified. Example usage: \`--table "sandbox"\``);
      process.exit(1);
    }
  } else {
    // a table has been specified
    // save the table name to state.json
    const state = { table: cliArgs.table };
    fs.writeFileSync("./state.json", JSON.stringify(state));
  }
  return cliArgs;
}

import { pipeline } from "stream";

async function metaMaskSetup() {
  const downloadPath = path.join(__dirname, "metamask.zip");
  if (!fs.existsSync(downloadPath)) {
    log.warn(`${downloadPath} not found! Downloading...`);
    await downloadNewCopy(downloadPath);
  } else {
    log.ok(`${downloadPath} found!`);
  }
  return downloadPath;
}

async function downloadNewCopy(downloadPath: string) {
  const downloadUrl = await getMetaMaskLatestDownloadUrl();
  const download = await fetch(downloadUrl);

  const dest = fs.createWriteStream(downloadPath);

  // @ts-expect-error
  pipeline(download.body, dest, (err) => {
    if (err) {
      console.error("Failed to download file", err);
    } else {
      console.log("File downloaded successfully");
    }
  });
}

async function getMetaMaskLatestDownloadUrl() {
  const response = await fetch("https://api.github.com/repos/MetaMask/metamask-extension/releases/latest");
  const json = await response.json();
  const asset = json.assets.find((a) => a.name.includes("metamask-chrome"));
  return asset.browser_download_url;
}

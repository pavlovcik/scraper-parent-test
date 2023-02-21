import path from "path";
import commandLineArgs from "command-line-args";
import { log } from "../scraper-kernel/src/logging";
import fs from "fs";

export function pagesHandler(options: commandLineArgs.CommandLineOptions) {
  if (!options.pages) {
    if (fs.existsSync(`src/pages`)) {
      log.info(`Using default pages directory: src/pages`);
      options.pages = path.resolve(`src/pages`);
      return;
    } else {
      log.error(`The pages is required. Please pass in the directory that has the page logic for the scraper. Example: --pages "src/pages"`);
      process.exit(1);
    }
  }
  if (options.pages.includes("dist/")) {
    log.warn(`The pages should not include the "dist/" directory. Please replace it with "src/" and run again using "tsx".`);
  }
  options.pages = path.resolve(options.pages);
}

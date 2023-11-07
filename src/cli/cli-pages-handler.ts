import path from "path";
import commandLineArgs from "command-line-args";
import { log } from "@korrrba/scraper-kernel-fork/logging";
import fs from "fs";
import { PAGES_PATH } from "../pages/PAGES_PATH";

export function pagesHandler(options: commandLineArgs.CommandLineOptions) {
  if (!options.pages) {
    try {
      options.pages = PAGES_PATH;
      return;
    } catch (e) {
      if (fs.existsSync(`src/pages`)) {
        options.pages = path.resolve(`src/pages`);
        return;
      }
    }
    log.error(`The page logic is required. Please pass in the directory that has the page logic for the scraper. Example: --pages "src/pages"`);
    process.exit(1);
  }
  if (options.pages.includes("dist/")) {
    log.warn(`The pages should not include the "dist/" directory. Please replace it with "src/" and run again using "tsx".`);
  }
  options.pages = path.resolve(options.pages);
}

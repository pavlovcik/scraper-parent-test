import path from "path";
import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";
import { log } from "./scraper-kernel/src/logging";
import fs from "fs";

const optionDefinitions = [
  { name: "help", type: Boolean, alias: "?", description: "Help menu." },
  {
    name: "table",
    type: String,
    alias: "t",
    description: "Which table in the database to save scraped GitHub profiles to.",
  },
  {
    name: "verbose",
    type: Number,
    alias: "v",
    description: "Pass in a number for verbose level. Max verbosity is level 5.",
  },
  {
    name: "headful",
    type: Boolean,
    alias: "h",
    description: "Enable headful scraping.",
  },
  {
    name: "urls",
    type: String,
    alias: "u",
    multiple: true,
    defaultOption: true,
    description: "The URLs for the scraper to process. Can be multiple.",
  },
  {
    name: "pages", // could also be logic
    type: String,
    alias: "p",
    description: "The directory that has the page logic for the scraper",
  },
  {
    name: "recruiter",
    type: String,
    alias: "r",
    description: "Tag the scraped GitHub profiles with recruiter credit. Must match the handle of the recruiter's GitHub account.",
  },
];

function readCommandLineArgs() {
  const options = commandLineArgs(optionDefinitions);
  pagesHandler(options);
  if (options.help) {
    const usage = commandLineUsage([
      {
        header: "Ubiquity Scraper",
        content: "The scraper kernel used across all Ubiquity tooling.",
      },
      {
        header: "Options",
        optionList: optionDefinitions,
      },
      {
        content: "Without Stability We Have Nothing. Ubiquity DAO. https://ubq.fi/",
      },
    ]);
    console.log(usage);
    process.exit(0);
  } else {
    console.log(`<<`, options);
  }
  return options;
}
const args = readCommandLineArgs(); // as { [name in Name]: __Type };
if (args.headful) {
  global.DEBUG_HEADFUL = args.headful;
}
export default args;

function pagesHandler(options: commandLineArgs.CommandLineOptions) {
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

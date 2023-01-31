import path from "path";
import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";
import { log } from './utils';

const optionDefinitions = [
  { name: "help", type: Boolean, alias: "?", description: "Help menu." },
  {
    name: "table",
    type: String,
    alias: "t",
    description:
      "Which table in the database to save scraped GitHub profiles to.",
  },
  {
    name: "verbose",
    type: Number,
    alias: "v",
    description:
      "Pass in a number for verbose level. Max verbosity is level 5.",
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
    name: "pagesDirectory", // could also be logic
    type: String,
    alias: "p",
    description: "The directory that has the page logic for the scraper",
  },
  {
    name: "recruiter",
    type: String,
    alias: "r",
    description:
      "Tag the scraped GitHub profiles with recruiter credit. Must match the handle of the recruiter's GitHub account.",
  },
];

function readCommandLineArgs() {
  const options = commandLineArgs(optionDefinitions);
  if(options.pagesDirectory.includes("src/")){
    log.warn(
      `The pagesDirectory should be compiled javascript and should not include the "src/" directory. Please replace it with "dist/".`,
      5
      )
  }
  options.pagesDirectory = path.resolve(options.pagesDirectory);
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
        content:
          "Without Stability We Have Nothing. Ubiquity DAO. https://ubq.fi/",
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
export default args;

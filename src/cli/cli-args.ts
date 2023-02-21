import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";
import { optionDefinitions } from "./cli-option-definitions";
import { pagesHandler } from "./cli-pages-handler";

const args = readCommandLineArgs(); // as { [name in Name]: __Type };
if (args.headful) {
  global.DEBUG_HEADFUL = args.headful;
}

export default args;

function readCommandLineArgs() {
  const options = commandLineArgs(optionDefinitions);
  pagesHandler(options);
  if (options.help) {
    helpMenu();
  } else {
    console.log(`<<`, options);
  }
  return options;
}

function helpMenu() {
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
}

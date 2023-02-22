import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";
import { cliOptions } from "./cli-options";
import { pagesHandler } from "./cli-pages-handler";

export default readCommandLineArgs(); // as { [name in Name]: __Type };

function readCommandLineArgs() {
  const options = commandLineArgs(cliOptions);
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
      optionList: cliOptions,
    },
    {
      content: "Without Stability We Have Nothing. Ubiquity DAO. https://ubq.fi/",
    },
  ]);
  console.log(usage);
  process.exit(0);
}

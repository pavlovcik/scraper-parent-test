import "source-map-support/register";
import readCommandLineArgs from "./cli-args";
import fs from "fs";
import scrape, { UserSettings } from "./scraper-kernel/src/scrape";

if (!readCommandLineArgs.table) {
  // no table has been specified

  // check if the table name has already been specified and saved to state.json
  // if not, then exit the process with an error

  if (fs.existsSync("./state.json")) {
    const state = JSON.parse(fs.readFileSync("./state.json", "utf8"));
    if (state.table) {
      readCommandLineArgs.table = state.table;
      console.log(`Using table "${state.table}" from state.json`);
    }
  } else {
    console.error(
      `No database table specified. Example usage: \`--table "sandbox"\``
    );
    process.exit(1);
  }
} else {
  // a table has been specified
  // save the table name to state.json
  const state = { table: readCommandLineArgs.table };
  fs.writeFileSync("./state.json", JSON.stringify(state));
}

// CLI ADAPTER
scrape(readCommandLineArgs as typeof readCommandLineArgs & UserSettings)
  .then((data) => {
    console.log(`<<`, data);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    // throw err;
    process.exit(1);
  });

//   // this is a hack for when pageTimeouts crash the scraper
// process.on("unhandledRejection", (error: Error, promise: Promise<unknown>) => {
//   console.error("Unhandled Rejection at: Promise", promise, "reason:", error);
//   // Stack Trace
//   console.error(error.stack);
// });

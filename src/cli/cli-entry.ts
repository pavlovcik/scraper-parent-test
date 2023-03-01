import { log } from "../scraper-kernel/src/logging";
import scrape, { UserSettings } from "../scraper-kernel/src/scrape";
import { setup } from "../setup";
import cliArgs from "./cli-args";
import util from "util";

setup(cliArgs).then((cliArgs) => {
  scrape(cliArgs as UserSettings)
    .then((data) => {
      // flatten and display all the details of data
      console.info(`<<`, util.inspect(data, { showHidden: false, depth: null }));
      process.exit(0);
    })
    .catch((err) => {
      log.error(err);
      process.exit(1);
    });
});

import { log } from "../scraper-kernel/src/logging";
import scrape, { UserSettings } from "../scraper-kernel/src/scrape";
import { setup } from "../setup";
import cliArgs from "./cli-args";

setup(cliArgs).then((cliArgs) => {
  scrape(cliArgs as UserSettings)
    .then((data) => {
      console.info(`<<`, data);
      process.exit(0);
    })
    .catch((err) => {
      log.error(err);
      process.exit(1);
    });
});

import cliArgs from "./cli-args";
import scrape from "./scraper-kernel/src/scrape";
import { log } from "./scraper-kernel/src/logging";
import { setup } from "./setup";
import { UserSettings } from './scraper-kernel/src/scrape';

setup(cliArgs).then((cliArgs) => {
  scrape(cliArgs as UserSettings)
    .then((data) => {
      console.info(`<<`, data);
      process.exit(0);
    })
    .catch((err) => {
      log.error(err);
      // throw err;
      process.exit(1);
    });
});

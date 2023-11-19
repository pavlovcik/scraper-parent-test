import { log } from "../scraper-kernel/src/logging";
import scrape, { UserSettings } from "../scraper-kernel/src/scrape";
import cliArgs from "./cli-args";
import { setup } from "./setup";

setup(cliArgs).then((cliArgs) => {
  scrape(cliArgs as UserSettings)
    .then(function rootSuccess(data) {
      // flatten and display all the details of data
      // log.ok(`<<`, util.inspect(data, true, null, true));
      console.dir(data, { depth: null, colors: true });
      process.exit(0);
    })
    .catch(function rootCrash(err) {
      log.error(err);
      process.exit(1);
    });
});

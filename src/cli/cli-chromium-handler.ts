import commandLineArgs from "command-line-args";
import { log } from '../scraper-kernel/src/logging';

export function chromiumHandler(options: commandLineArgs.CommandLineOptions) {
  if (options.chromium) {
    log.info(options.chromium);
    options.chromium = options.chromium.split(" ") as string[];
    log.info(options.chromium);
  }
  return options.chromium;
}

import commandLineArgs from "command-line-args";

export function chromiumHandler(options: commandLineArgs.CommandLineOptions) {
  if (options.chromium) {
    options.chromium = options.chromium.split(" ") as string[];
  }
  return options.chromium;
}

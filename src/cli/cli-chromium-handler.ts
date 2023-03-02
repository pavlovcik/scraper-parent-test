import commandLineArgs from "command-line-args";

export function chromiumHandler(options: commandLineArgs.CommandLineOptions) {
  if (options.chromium) {
    console.log(options.chromium);
    options.chromium = options.chromium.split(" ") as string[];
    console.log(options.chromium);
  }
  return options.chromium;
}

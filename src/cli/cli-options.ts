export const cliOptions = [
  { name: "help", type: Boolean, alias: "?", description: "Help menu." },
  {
    name: "table",
    type: String,
    alias: "t",
    description: "Which table in the database to save scraped GitHub profiles to.",
  },
  {
    name: "verbose",
    type: Number,
    alias: "v",
    description: "Pass in a number for verbose level. Max verbosity is level 5.",
  },
  {
    name: "headful",
    type: Boolean,
    alias: "h",
    description: "Enable headful scraping.",
  },
  {
    name: "urls",
    type: String,
    alias: "u",
    multiple: true,
    defaultOption: true,
    description: "The URLs for the scraper to process. Can be multiple.",
  },
  {
    name: "pages",
    type: String,
    alias: "p",
    description: "The directory that has the page logic for the scraper",
  },
  {
    name: "recruiter",
    type: String,
    alias: "r",
    description: "Tag the scraped GitHub profiles with recruiter credit. Must match the handle of the recruiter's GitHub account.",
  },
  {
    name: "chromium",
    type: String,
    alias: "c",
    description: 'Pass flags directly to Chromium. Example: --chromium="--no-sandbox --disable-setuid-sandbox"',
  },
  {
    name: "metamask",
    type: String,
    alias: "m",
    description: "The path to the MetaMask extension zip file.",
  },
  {
    name: "executablePath",
    type: String,
    alias: "e",
    description: "The path to the Chromium executable.",
  },
];

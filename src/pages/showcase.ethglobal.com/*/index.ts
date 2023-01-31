import scrape from "../../../scrape";
import { log } from "../../../utils";
import { scrapeGit } from "../../ethglobal.com/showcase/*";
// /Users/nv/repos/ubiquity/scraper/src/pages/showcase.ethglobal.com/*/index.ts

// const regexRemoveFilter = "https://showcase.ethglobal.com/";
const githubSelector = `a[href^="https://github.com/"]`; // Just scrape GitHub even though I noticed gitlab and etherscan links for "source code"
// `a[href*=git]`

export default async function showcaseEthGlobal(browser, page) {
  const githubUrl = await scrapeGit(page, githubSelector).catch((error) => error && log.error(`Couldn't find GitHub link at ${page.url()}`));
  if (githubUrl) {
    return await scrape(githubUrl, browser);
  }
}

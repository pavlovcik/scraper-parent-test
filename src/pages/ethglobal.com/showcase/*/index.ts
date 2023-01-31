import puppeteer, { Page } from "puppeteer";
import scrape from "../../../../scrape";
import { getProperty, log } from "../../../../utils";
// /Users/nv/repos/ubiquity/scraper/src/pages/ethglobal.com/showcase/*/index.ts
// project view default logic

// const regexRemoveFilter = "https://ethglobal.com/showcase/";
const githubSelector = `a[href^="https://github.com/"]`; // Just scrape GitHub even though I noticed gitlab and etherscan links for "source code"

export default async function projectViewController(browser: puppeteer.Browser, page: puppeteer.Page) {
  const githubUrl = await scrapeGit(page, githubSelector).catch((error) => error && log.error(`Couldn't find GitHub link at ${page.url()}`));
  if (githubUrl) {
    return await scrape(githubUrl, browser);
  }
}

export async function scrapeGit(page: Page, githubSelector: string) {
  // const button = await page.$(githubSelector).catch((error) => error && log.error(`Couldn't find GitHub link at ${page.url()}`));
  const button = await page.waitForSelector(githubSelector).catch((error) => error && log.error(`Couldn't find GitHub link at ${page.url()}`));

  if (button) {
    const githubUrl = await getProperty(button, "href");
    const parsed = new URL(githubUrl);
    if (parsed.href && !githubUrl.includes("ethglobal")) {
      // const row = [
      //   Date.now(), // timestamp
      //   page.url().replace(regexRemoveFilter, "").split("/"), // page url
      //   parsed.href, // github url
      // ].join(",");

      // fs.appendFile("buffer.csv", row.concat("\n"), (error) => error && console.error(error));
      return parsed.href;
    }
  }
  return null;
}

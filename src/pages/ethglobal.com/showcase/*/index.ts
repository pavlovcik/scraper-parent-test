import puppeteer, { Page } from "puppeteer";
import { getProperty } from "../../../../utils/utils";
import { Browser } from "puppeteer";
import path from "path";
import { log } from "../../../../scraper-kernel/src/logging";
import scrape from "../../../../scraper-kernel/src/scrape";
import { PAGES_PATH } from "../../../../scraper-kernel/src/PAGES_PATH";
// /Users/nv/repos/ubiquity/scraper/src/pages/ethglobal.com/showcase/*/index.ts
// project view default logic

// const regexRemoveFilter = "https://ethglobal.com/showcase/";
const githubSelector = `a[href^="https://github.com/"]`; // Just scrape GitHub even though I noticed gitlab and etherscan links for "source code"

export default async function projectViewController(browser: Browser, page: Page) {
  const githubUrl = await scrapeGit(page, githubSelector);

  if (githubUrl) {
    const settings = { urls: githubUrl, pages: PAGES_PATH };
    return await scrape(settings, browser);
  }
}

export async function scrapeGit(page: Page, githubSelector: string) {
  const button = await page.waitForSelector(githubSelector).catch(function noGitHubSelectorFound(error) {
    if (error) {
      log.error(`Couldn't find GitHub link at ${page.url()}`);
    }
  });

  if (button) {
    const githubUrl = await getProperty(button, "href");
    const parsed = new URL(githubUrl);
    if (parsed.href && !githubUrl.includes("ethglobal")) {
      return parsed.href;
    }
  }
  return null;
}

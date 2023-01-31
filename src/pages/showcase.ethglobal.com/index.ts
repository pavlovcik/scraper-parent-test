import puppeteer from "puppeteer";
import { getActiveTab, getHREFsFromAnchors } from "../../utils";
import { Browser, Page } from 'puppeteer';
import scrape from "../../scraper/src/scrape";

export default async (browser: Browser, pagesDirectory:string) => {
  const page = await getActiveTab(browser);
  // await debugLogging(page);
  const hackathonUrls = await getHREFsFromAnchors(page, `#event > div > a`);
  const results = await scrape({urls: hackathonUrls, pagesDirectory}, browser);

  return results;
};

async function debugLogging(page: Page) {
  await page.setRequestInterception(true);

  page.on("request", (request) => {
    console.log(">>", request.method(), request.url());
    request.continue();
  });

  page.on("response", (response) => console.log("<<", response.status(), response.url()));
}

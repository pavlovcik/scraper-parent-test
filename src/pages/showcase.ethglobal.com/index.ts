import puppeteer from "puppeteer";
import scrape from "../../scrape";
import { getActiveTab, scrapeHrefsFromAnchors } from "../../utils";

export default async (browser: puppeteer.Browser) => {
  const page = await getActiveTab(browser);
  // await debugLogging(page);
  const hackathonUrls = await scrapeHrefsFromAnchors(page, `#event > div > a`);
  const results = await scrape(hackathonUrls, browser);

  return results;
};

async function debugLogging(page: puppeteer.Page) {
  await page.setRequestInterception(true);

  page.on("request", (request) => {
    console.log(">>", request.method(), request.url());
    request.continue();
  });

  page.on("response", (response) => console.log("<<", response.status(), response.url()));
}

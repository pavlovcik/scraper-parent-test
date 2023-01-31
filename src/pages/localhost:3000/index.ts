import puppeteer from "puppeteer";
import scrape from "../../scrape";
import { scrapeHrefsFromAnchors } from "../../utils";
export default async function ubiquityDollarDashboardController(browser: puppeteer.Browser, page: puppeteer.Page) {
  // console.trace("ok");
  const hrefs = await scrapeHrefsFromAnchors(page, "a");
  // console.trace("hrefs");
  const results = await scrape(hrefs, browser);
  console.log(results);
  return true;
}

import puppeteer from "puppeteer";
import { getHREFsFromAnchors } from "../../utils";
import { Browser, Page } from "puppeteer";
import scrape from "../../scraper/src/scrape";
export default async function ubiquityDollarDashboardController(
  browser: Browser,
  page: Page,
  pagesDirectory: string
) {
  // console.trace("ok");
  const HREFs = await getHREFsFromAnchors(page, "a");
  // console.trace("hrefs");
  const results = await scrape({ urls: HREFs, pagesDirectory }, browser);
  console.log(results);
  return true;
}
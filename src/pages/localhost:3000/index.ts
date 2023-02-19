import puppeteer from "puppeteer";
import { getHREFsFromAnchors } from "../../utils/utils";
import { Browser, Page } from "puppeteer";
import scrape from "../../../src/scraper-kernel/src/scrape";
export default async function ubiquityDollarDashboardController(
  browser: Browser,
  page: Page,
  pages: string
) {
  // console.trace("ok");
  const HREFs = await getHREFsFromAnchors(page, "a");
  // console.trace("hrefs");
  const results = await scrape({ urls: HREFs, pages }, browser);
  console.log(results);
  return true;
}

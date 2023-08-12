import puppeteer from "puppeteer";
import { getHREFsFromAnchors } from "../../utils/utils";
import { Browser, Page } from "puppeteer";
import scrape from "../../../src/scraper-kernel/src/scrape";
import { log } from '../../scraper-kernel/src/logging';
export default async function ubiquityDollarDashboardController(
  browser: Browser,
  page: Page,
  pages: string
) {
  // log.info("ok");
  const HREFs = await getHREFsFromAnchors(page, "a");
  // log.info("hrefs");
  const results = await scrape({ urls: HREFs, pages }, browser);
  log.info(results);
  return true;
}

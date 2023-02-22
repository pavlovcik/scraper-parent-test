import { Browser, Page } from "puppeteer";
import { log } from "../../../scraper-kernel/src/logging";

// hello from markets
export default async function marketsPageController(browser: Browser, page: Page) {
  log.warn("hello from markets.ts!");
}

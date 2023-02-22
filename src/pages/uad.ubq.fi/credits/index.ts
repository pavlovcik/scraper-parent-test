import { Browser, Page } from "puppeteer";
import { log } from "../../../scraper-kernel/src/logging";

// hello from credits
export default async function creditsPageController(browser: Browser, page: Page) {
  log.warn("hello from credits.ts!");
}

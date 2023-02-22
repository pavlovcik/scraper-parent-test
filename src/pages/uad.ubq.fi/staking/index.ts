import { Browser, Page } from "puppeteer";
import { log } from "../../../scraper-kernel/src/logging";

// hello from staking
export default async function stakingPageController(browser: Browser, page: Page) {
  log.warn("hello from staking.ts!");
}

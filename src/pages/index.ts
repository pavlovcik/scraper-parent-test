import { Browser, Page } from "puppeteer";
import { log } from "../scraper-kernel/src/logging";

export default async function defaultPageController(browser: Browser, page: Page) {
  log.error(`This page doesn't have a page controller. Please add one to src/pages/${page.url().split("/")[3]}/index.ts`);
}

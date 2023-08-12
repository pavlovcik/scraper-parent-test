import { Browser, Page } from "puppeteer";
import { log } from "../scraper-kernel/src/logging";
import { PAGES_PATH } from "../scraper-kernel/src/PAGES_PATH";
// import metaMaskPageController from "./metamask-extension";
// import metaMaskPageController from "./metamask";
export default async function defaultPageController(browser: Browser, page: Page) {
  const _url = page.url().split("/");

  _url.shift();
  _url.shift();

  const url = _url.join("/");
  log.error(`This page doesn't have a page controller. Please add one to ${PAGES_PATH}/${url}/index.ts`);

  // log.info(`Trying MetaMask's default page controller...`);
  // await metaMaskPageController(browser, page);
}

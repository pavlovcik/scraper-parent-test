import { Browser } from "puppeteer";

export async function getLastPage(browser: Browser) {
  const pages = await browser.pages();
  const lastPage = pages[pages.length - 1];
  return lastPage;
}

import puppeteer from "puppeteer";
import { scrollToBottom } from "../../../../utils";

export async function scrollToBottomOfFirstTab(browser: puppeteer.Browser) {
  const pages = await browser.pages();
  const page = pages[pages.length - 1];
  if (!page) {
    throw new Error("No page found");
  }
  await scrollToBottom(page);
  return page;
}

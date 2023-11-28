import { Browser, Page } from "puppeteer";
import { log } from "../../scraper-kernel/src/logging";
import { delay } from "../../utils/utils";

export async function huntForPopUp(browser: Browser) {
  const pages = await browser.pages();
  const page = pages[pages.length - 1];
  try {
    await page.click("button.button.btn--rounded.btn-primary");
    await delay(500);
    await pressMetaMaskNextButton(browser, page);
    log.ok(`OK`);
    return;
  } catch (error) {
    return await huntForPopUp(browser); // try again
  }
}

async function pressMetaMaskNextButton(browser: Browser, page: Page) {
  const next = await page.waitForSelector("button.button.btn--rounded.btn-primary", { timeout: 30000 });
  if (!next) {
    log.warn("No MetaMask next button found.");
    return null;
  }

  await next.click();
  return next;
}

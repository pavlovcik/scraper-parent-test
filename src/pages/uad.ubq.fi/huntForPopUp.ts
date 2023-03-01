import { Browser } from "puppeteer";
import { log } from "../../scraper-kernel/src/logging";
import { delay } from "../../utils/utils";
import { pressMetaMaskNextButton } from "../metamask-extension";

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

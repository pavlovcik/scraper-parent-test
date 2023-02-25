import { Browser } from "puppeteer";
import { log } from "../../scraper-kernel/src/logging";
import { delay } from "../../utils/utils";
import { pressMetaMaskNextButton } from "../metamask-extension";

export async function huntForPopUp(browser: Browser) {
  const pages = await browser.pages();

  let OK = false;

  let x = pages.length;
  while (x--) {
    const page = pages[x];
    try {
      console.log(`ONE`);
      const button = await pressMetaMaskNextButton(browser, page);
      if (!button) {
        continue;
      }
      await delay();
      console.log(`TWO`);
      await pressMetaMaskNextButton(browser, page);

      OK = true;
    } catch (error) {}
  }

  // for (const page of pages) {

  // }

  if (OK) {
    log.ok(`OK`);
    return;
  } else {
    log.warn(`NOT OK`);
    await huntForPopUp(browser);
  }
}

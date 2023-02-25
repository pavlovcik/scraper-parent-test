import { Browser } from "puppeteer";
import { log } from "../../scraper-kernel/src/logging";
import { delay } from "../../utils/utils";
import { pressMetaMaskNextButton } from "../metamask-extension";

export async function huntForPopUp(browser: Browser) {
  const pages = await browser.pages();

  // promise race for the metamask selection button on all the pages
  // const huntForMetamaskSelectionButton = async (page) => {
  // await page.bringToFront();
  // log.warn(page.url());
  // await pressMetaMaskNextButton(browser, page);
  // const metamaskSelect = await page.waitForSelector("button.button.btn--rounded.btn-primary", { timeout: 15000 }).catch();
  // // log.info(page.url());
  // if (metamaskSelect) {
  //   log.ok(page.url());
  //   return page;
  // }
  // return null;
  // };
  // const promises = pages.map(huntForMetamaskSelectionButton);
  // wait for the first promise to resolve
  // if it resolves with a page, return that page
  // if it resolves with null, continue
  // for (const promise of promises) {
  //   const page = await promise;
  //   if (page) {
  //     return page;
  //   }
  // }
  let OK = false;
  for (const page of pages) {
    //   const url = page.url();

    try {
      console.log(`ONE`);
      const button = await pressMetaMaskNextButton(browser, page);
      if (!button) {
        continue;
      }
      await delay();
      console.log(`TWO`);
      pressMetaMaskNextButton(browser, page);

      OK = true;
    } catch (error) {}

    // await delay(250);

    // await delay(250);
    //   if (url.includes("notification") || url.includes("connect")) {
    //     await page.bringToFront();
    //     return page;
    //     // await page.screenshot({ path: url.replaceAll("/", "-").concat(".png") });
    //   }
  }

  if (OK) {
    log.ok(`OK`);
    return;
  } else {
    log.warn(`NOT OK`);
    await huntForPopUp(browser);
  }

  // throw new Error("No popup found");
}

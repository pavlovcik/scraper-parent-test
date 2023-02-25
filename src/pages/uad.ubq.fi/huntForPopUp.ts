import { Browser } from "puppeteer";
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
  for (const page of pages) {
    //   const url = page.url();
    console.log(`ONE`);
    pressMetaMaskNextButton(browser, page).catch();
    await delay(250);
    console.log(`TWO`);
    pressMetaMaskNextButton(browser, page).catch();
    await delay(250);
    // console.log(`THREE`);
    // pressMetaMaskNextButton(browser, page).catch();
    // await delay(250);
    // console.log(`FOUR`);
    // pressMetaMaskNextButton(browser, page).catch();
    // await delay(250);
    //   if (url.includes("notification") || url.includes("connect")) {
    //     await page.bringToFront();
    //     return page;
    //     // await page.screenshot({ path: url.replaceAll("/", "-").concat(".png") });
    //   }
  }

  // throw new Error("No popup found");
}

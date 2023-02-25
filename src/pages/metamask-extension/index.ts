import { Browser, Page } from "puppeteer";
import { colorizeText, log } from "../../scraper-kernel/src/logging";
import { delay } from "../../utils/utils";

// export default async function metaMaskPageController(browser: Browser, page: Page) {
//   // const title = await page.title();
//   await metaMaskLogin(browser, page);
//   await delay(5000);

//   await metaMaskNotification(browser, page);
// }

export default async function metaMaskLoginWithPassword(browser: Browser, page: Page) {
  const password = await page.waitForSelector("#password", { visible: true }); // wait until #password is visible
  await page.waitForSelector("#password", { visible: true }); // wait until #password is visible

  password?.type("aaaaaaaa"); // my password
  await delay(250);
  password?.type(String.fromCharCode(13)); // form submit
  await delay(250);
  log.warn("Logged into MetaMask successfully.");
}

export async function pressMetaMaskNextButton(browser: Browser, page: Page) {
  const next = await page.waitForSelector("button.button.btn--rounded.btn-primary", { timeout: 1000 });
  next.click();
  return next;
}

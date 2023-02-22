import { Browser, Page } from "puppeteer";
import { log } from "../../../scraper-kernel/src/logging";
import { delay } from "../../../utils/utils";

export default async function metaMaskPageController(browser: Browser, page: Page) {
  const title = await page.title();
  if (title === "MetaMask Notification") {
    await notificationHtml(browser, page);
  } else if (title === "MetaMask") {
    await homeHtml(browser, page);
  } else {
    log.warn(`MetaMask: Unknown page title: "${title}"`);
    // await page.close();
  }
}

async function homeHtml(browser: Browser, page: Page) {
  const password = await page.waitForSelector("#password", { visible: true }); // wait until #password is visible
  await page.waitForSelector("#password", { visible: true }); // wait until #password is visible

  password?.type("aaaaaaaa"); // my password
  await delay(250);
  password?.type(String.fromCharCode(13)); // form submit
  await delay(250);
  log.warn("Logged into MetaMask successfully.");
  await page.close();
  return () => {
    log.warn("hello");
  };
}
async function notificationHtml(browser: Browser, page: Page) {
  const next = await page.waitForSelector("button.button.btn--rounded.btn-primary", { visible: true, timeout: 1000 }); // wait until NEXT is visible
  await next?.click();

  const next2 = await page.waitForSelector("button.button.btn--rounded.btn-primary", { visible: true, timeout: 1000 }); // wait until NEXT is visible
  await next2?.click();
}

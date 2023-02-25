import { Browser, Page } from "puppeteer";
import { colorizeText, log } from "../../scraper-kernel/src/logging";
import { delay } from "../../utils/utils";

export default async function metaMaskPageController(browser: Browser, page: Page) {
  const title = await page.title();
  if (title === "MetaMask Notification") {
    await metaMaskNotification(browser, page);
  } else if (title === "MetaMask") {
    await metaMaskLogin(browser, page);
  } else {
    log.warn(`MetaMask: Unknown page title: "${title}"`);
    // await page.close();
  }
}

export async function metaMaskLogin(browser: Browser, page: Page) {
  const password = await page.waitForSelector("#password", { visible: true }); // wait until #password is visible
  await page.waitForSelector("#password", { visible: true }); // wait until #password is visible

  password?.type("aaaaaaaa"); // my password
  await delay(250);
  password?.type(String.fromCharCode(13)); // form submit
  await delay(250);
  log.warn("Logged into MetaMask successfully.");
}
export async function metaMaskNotification(browser: Browser, page: Page) {
  // show me the page url of every open tab available on the browser
  const pages = await browser.pages();
  for (const page of pages) {
    const url = page.url();
    console.log(`${colorizeText(url, "fgYellow")}`);
    page.screenshot({ path: `${url.replaceAll("/", "-")}.png` });
    await delay(250);
    if (url.startsWith("chrome-extension://")) {
      const next = await page.waitForSelector("button.button.btn--rounded.btn-primary");
      next.click();
      await page.close();
    }
    // await page.bringToFront();
    // try {

    // await page.close();
    // } catch (error) {}
  }
}

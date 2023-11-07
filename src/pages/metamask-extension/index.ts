import { Browser, Page } from "puppeteer";
import { log } from "@korrrba/scraper-kernel-fork/logging";

export default async function metaMaskLoginWithPassword(browser: Browser, page: Page) {
  const password = await page.waitForSelector("#password", { visible: true }); // wait until #password is visible
  const keyboardStrokes = "aaaaaaaa".concat(String.fromCharCode(13));
  await password?.type(keyboardStrokes);
  log.warn("Logged into MetaMask successfully.");
}

export async function pressMetaMaskNextButton(browser: Browser, page: Page) {
  const next = await page.waitForSelector("button.button.btn--rounded.btn-primary", { timeout: 1000 });
  next.click();
  return next;
}

import { Page, Browser } from "puppeteer";
import { delay } from "../../utils/utils";
import metaMaskPageController from "../eabbjjmhckhabkmlefjbeidehgdgkdko/*";

// using this to load netlify because it has a dynamic subdomain and the page logic matcher doesn't support that now
export default async function uadUbqFiPageController(browser: Browser, page: Page) {
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    if (message) {
      consoleErrors.push(message.text());
    }
  });

  const pages = await browser.pages();
  const lastPage = pages[pages.length - 1];
  await metaMaskPageController(browser, lastPage);
  await delay(1000);
  const walletConnect = await page.waitForSelector("#WalletConnect");
  await walletConnect?.click();
  const metamaskSelect = await page.waitForSelector(
    "#__CONNECTKIT__ > div > div > div > div.sc-idXgbr.dWgQgj > div.sc-kDvujY.juXNVx.active > div.sc-csuSiG.hEdpAI > div > div > div > div.sc-hiDMwi.dyPmnV > button:nth-child(1)"
  );
  await metamaskSelect?.click();

  await delay(60000);

  console.log(consoleErrors);
}

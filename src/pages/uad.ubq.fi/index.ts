import { Page, Browser } from "puppeteer";
import { log } from "../../scraper-kernel/src/logging";
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

  //

  await delay(1000);
  await connectWallet(page);
  await delay(1000);
  await testNavBar(page);
  await delay(60000);

  //

  console.log(consoleErrors);
}

async function connectWallet(page: Page) {
  const walletConnect = await page.waitForSelector("#WalletConnect");
  await walletConnect?.click();

  const metamaskSelect = await page.waitForSelector(
    "#__CONNECTKIT__ > div > div > div > div.sc-idXgbr.dWgQgj > div.sc-kDvujY.juXNVx.active > div.sc-csuSiG.hEdpAI > div > div > div > div.sc-hiDMwi.dyPmnV > button:nth-child(1)"
  );
  await metamaskSelect?.click();
}

async function testNavBar(page: Page) {
  const navbar = await page.waitForSelector(`#Sidebar`);
  // get anchors in navbar
  const anchors = await navbar?.$$("ul:nth-child(1) a");
  if (!anchors) {
    throw new Error("No anchors found in navbar");
  }
  // click each anchor
  for (const anchor of anchors) {
    // dont click on the anchor that has attribute href="/" because it will reload the page
    if ((await anchor?.evaluate((node) => node.getAttribute("href"))) === "/") {
      continue;
    }

    await anchor?.click();
    log.info(`Clicked ${await anchor?.evaluate((node) => node.textContent)}`);
    await delay(5000);
  }
}

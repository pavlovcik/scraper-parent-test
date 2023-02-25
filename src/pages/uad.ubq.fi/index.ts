import { Page, Browser, Target } from "puppeteer";
import { log } from "../../scraper-kernel/src/logging";
import { delay } from "../../utils/utils";
import metaMaskPageController, { metaMaskLogin, metaMaskNotification } from "../metamask-extension";

// using this to load netlify because it has a dynamic subdomain and the page logic matcher doesn't support that now
export default async function uadUbqFiPageController(browser: Browser, page: Page) {
  const errors = [] as any[];
  const pageErrors = [] as any[];
  const consoleMessages = [] as any[];

  page.on("error", (err) => {
    log.error("ERROR");
    console.log(err.message);
    errors.push(err.message);
  });

  page.on("pageerror", (pageError) => {
    log.error("PAGE_ERROR");
    console.log(pageError.message);
    pageErrors.push(pageError.message);
  });

  page.on("console", (message) => {
    log.info("CONSOLE");
    console.log(message.text());
    consoleMessages.push(message.text());
  });

  let lastPage = await getLastPage(browser);
  await metaMaskLogin(browser, lastPage);
  await page.bringToFront();

  // await connectWallet(page);

  // const targets = browser.targets();

  // for (const target of targets) {
  //   if (target.type() !== "page") {
  //     continue;
  //   }
  //   await metaMaskNotification(browser, (await target.page()) as Page);
  // }

  // await delay(10000);

  await testNavBar(page);

  return [...errors, ...pageErrors, ...consoleMessages];
}

async function getLastPage(browser: Browser) {
  const pages = await browser.pages();
  const lastPage = pages[pages.length - 1];
  return lastPage;
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

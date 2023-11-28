import { Browser, Page } from "puppeteer";
import { log } from "../../scraper-kernel/src/logging";
import { getLastPage } from "./getLastPage";
import { huntForPopUp } from "./huntForPopUp";
import { testNavBar } from "./testNavBar";
import { walletConnectModal } from "./walletConnectModal";

// using this to load netlify because it has a dynamic subdomain and the page logic matcher doesn't support that now
export default async function uadUbqFiPageController(browser: Browser, ubiquityDappPage: Page) {
  const consoleMessages = captureLogs(ubiquityDappPage);
  await ubiquityDappPage.screenshot({ path: "1.png" });
  const lastPage = await getLastPage(browser);

  const pages = await browser.pages();
  console.trace({ pages });
  // const lastPage = pages[pages.length - 1];
  // return lastPage;

  await lastPage.screenshot({ path: "2.png" });
  await metaMaskLoginWithPassword(browser, lastPage);
  await lastPage.screenshot({ path: "3.png" });
  await metamaskOnboarding(browser, lastPage);
  await lastPage.screenshot({ path: "5.png" });
  await lastPage.screenshot({ path: "onboarded.png" });
  await ubiquityDappPage.bringToFront();
  await walletConnectModal(ubiquityDappPage);
  await huntForPopUp(browser);
  await testNavBar(ubiquityDappPage);
  return consoleMessages;
}

function captureLogs(page: Page) {
  let consoleMessages = {};

  page.on("console", (message) => {
    if (!consoleMessages[message.type()]) {
      consoleMessages[message.type()] = [];
    }
    consoleMessages[message.type()].push({
      text: message.text(),
      location: message.location(),
      // args: message.args(),
    });

    log.info(message.text());
  });

  return consoleMessages;
}

async function metaMaskLoginWithPassword(browser: Browser, page: Page) {
  const password = await page.waitForSelector("#password", { visible: true }).catch(async (error) => {
    await page.screenshot({ path: "4.png" });
    throw error;
  }); // wait until #password is visible
  const keyboardStrokes = "aaaaaaaa".concat(String.fromCharCode(13));
  await password?.type(keyboardStrokes);
  log.warn("Logged into MetaMask successfully.");
}

async function metamaskOnboarding(browser: Browser, page: Page) {
  // Agree to the terms of use by clicking the checkbox
  await page.waitForSelector("#onboarding__terms-checkbox");
  await page.click("#onboarding__terms-checkbox");

  // Click the "Create Wallet" button
  await page.waitForSelector('[data-testid="onboarding-create-wallet"]');
  await page.click('[data-testid="onboarding-create-wallet"]');
}

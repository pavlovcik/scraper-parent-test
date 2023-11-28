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
  // await metaMaskLoginWithPassword(browser, lastPage);
  // await lastPage.screenshot({ path: "3.png" });
  await metaMaskCreateNewWallet(browser, lastPage);
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

// async function metaMaskLoginWithPassword(browser: Browser, page: Page) {
//   const password = await page.waitForSelector("#password", { visible: true }).catch(async (error) => {
//     await page.screenshot({ path: "4.png" });
//     throw error;
//   }); // wait until #password is visible
//   const keyboardStrokes = "aaaaaaaa".concat(String.fromCharCode(13));
//   await password?.type(keyboardStrokes);
//   log.warn("Logged into MetaMask successfully.");
// }

async function metaMaskCreateNewWallet(browser: Browser, page: Page) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await page.waitForSelector('[data-testid="onboarding-create-wallet"]');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await page.click('[data-testid="onboarding-create-wallet"]');
  await new Promise((resolve) => setTimeout(resolve, 1000));

  await page.waitForSelector('[data-testid="metametrics-no-thanks"]');
  await page.click('[data-testid="metametrics-no-thanks"]');

  await new Promise((resolve) => setTimeout(resolve, 1000));

  await page.type('[data-testid="create-password-new"]', "your password");
  await page.type('[data-testid="create-password-confirm"]', "your password");
  await page.click('[data-testid="create-password-terms"]');
  await page.click('[data-testid="create-password-wallet"]');

  await new Promise((resolve) => setTimeout(resolve, 5000));

  await page.click('[data-testid="secure-wallet-later"]');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await page.click('[data-testid="skip-srp-backup-popover-checkbox"]');
  await page.click('[data-testid="skip-srp-backup"]');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await page.click('[data-testid="onboarding-complete-done"]');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await page.click('[data-testid="pin-extension-next"]');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await page.click('[data-testid="pin-extension-done"]');
}

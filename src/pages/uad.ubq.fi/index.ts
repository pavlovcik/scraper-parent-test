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
  let lastPage = await getLastPage(browser);
  await ubiquityDappPage.screenshot({ path: "2.png" });
  await metaMaskLoginWithPassword(browser, lastPage);
  await ubiquityDappPage.screenshot({ path: "3.png" });
  // await pressMetaMaskNextButton(browser, lastPage);
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
  const password = await page.waitForSelector("#password", { visible: true }); // wait until #password is visible
  const keyboardStrokes = "aaaaaaaa".concat(String.fromCharCode(13));
  await password?.type(keyboardStrokes);
  log.warn("Logged into MetaMask successfully.");
}

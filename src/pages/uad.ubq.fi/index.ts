import { Browser, Page } from "puppeteer";
import { log } from "@korrrba/scraper-kernel-fork/logging";
import metaMaskLoginWithPassword, { pressMetaMaskNextButton } from "../metamask-extension";
import { getLastPage } from "./getLastPage";
import { huntForPopUp } from "./huntForPopUp";
import { testNavBar } from "./testNavBar";
import { walletConnectModal } from "./walletConnectModal";

// using this to load netlify because it has a dynamic subdomain and the page logic matcher doesn't support that now
console.trace();
export default async function uadUbqFiPageController(browser: Browser, ubiquityDappPage: Page) {
  console.trace();
  const consoleMessages = captureLogs(ubiquityDappPage);
  let lastPage = await getLastPage(browser);
  await metaMaskLoginWithPassword(browser, lastPage);
  await pressMetaMaskNextButton(browser, lastPage);
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

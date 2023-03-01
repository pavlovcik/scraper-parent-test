import { Browser, Page } from "puppeteer";
import { log } from "../../scraper-kernel/src/logging";
import { delay } from "../../utils/utils";
import metaMaskLoginWithPassword, { pressMetaMaskNextButton } from "../metamask-extension";
import { getLastPage } from "./getLastPage";
import { huntForPopUp } from "./huntForPopUp";
import { testNavBar } from "./testNavBar";
import { walletConnectModal } from "./walletConnectModal";

// using this to load netlify because it has a dynamic subdomain and the page logic matcher doesn't support that now
export default async function uadUbqFiPageController(browser: Browser, ubiquityDappPage: Page) {
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
  // const errors = [] as any[];
  // const pageErrors = [] as any[];
  // const consoleMessages = [] as any[];
  let consoleMessages = {};
  // page.on("error", (err) => {
  //   log.error("ERROR");
  //   errors.push(err.message);
  // });

  // page.on("pageerror", (pageError) => {
  //   log.error("PAGE_ERROR");
  //   pageErrors.push(pageError.message);
  // });

  // page.on("console", (message) => {
  //   log.info("CONSOLE");
  //   consoleMessages.push(message.text());
  // });

  page.on("console", (message) => {
    if (!consoleMessages[message.type()]) {
      consoleMessages[message.type()] = [];
    }
    consoleMessages[message.type()].push({
      text: message.text(),
      location: message.location(),
      args: message.args(),
    });

    log.info(message.text());

  });

  //   page.on('requestfailed', request => {
  //     log.error(`Request failed: ${request.url()}`)
  //     errors.push(request.failure().errorText);
  // });
  return consoleMessages;
  // return { errors, pageErrors, consoleMessages };
}

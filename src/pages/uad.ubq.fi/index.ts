import { Browser, Page } from "puppeteer";
import { log } from "../../scraper-kernel/src/logging";
import { delay } from "../../utils/utils";
import metaMaskLoginWithPassword, { pressMetaMaskNextButton } from "../metamask-extension";
import { getLastPage } from "./getLastPage";
import { huntForPopUp } from "./huntForPopUp";
import { testNavBar } from "./testNavBar";
import { walletConnectModal } from "./walletConnectModal";

// using this to load netlify because it has a dynamic subdomain and the page logic matcher doesn't support that now
export default async function uadUbqFiPageController(browser: Browser, page: Page) {
  const { errors, pageErrors, consoleMessages } = captureLogs(page);

  console.log(`> let lastPage = await getLastPage(browser); `);
  let lastPage = await getLastPage(browser);
  console.log(`> await metaMaskLoginWithPassword(browser, lastPage); `);
  await metaMaskLoginWithPassword(browser, lastPage);
  console.log(`> await pressMetaMaskNextButton(browser, lastPage); `);
  await pressMetaMaskNextButton(browser, lastPage);
  console.log(`> await page.bringToFront(); `);
  await page.bringToFront();
  console.log(`> await walletConnectModal(page); `);
  await walletConnectModal(page);

  console.log(`> await delay(2500); `)
  await delay(2500);

  console.log(`> await huntForPopUp(browser);`);
  await huntForPopUp(browser);

  console.log(`> await delay(2500); `)
  await delay(2500);

  console.log(`> await testNavBar(page);`);
  await testNavBar(page);

  return [...errors, ...pageErrors, ...consoleMessages];
}

function captureLogs(page: Page) {
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
  return { errors, pageErrors, consoleMessages };
}

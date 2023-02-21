import { Page, Browser } from "puppeteer";
import { log } from "../scraper-kernel/src/logging";

// using this to load netlify because it has a dynamic subdomain and the page logic matcher doesn't support that now
export default async function defaultPageController(browser: Browser, page: Page) {
  const consoleErrors: string[] = [];

  page.on("console", (message) => {
    if (message) {
      consoleErrors.push(message.text());
    }
  });

  // await page.waitForSelector("#metamask-icon");
  // await page.click("#metamask-icon");
  // await page.waitForSelector("#metamask-mnemonic-box");

  await page.evaluate(
    (state, mnemonic) => {
      window.ethereum._state = state;

      window.localStorage.setItem("test-metamask-state", JSON.stringify({ data: { vault: { data: { mnemonic: mnemonic } } } }));
    },
    { networkVersion: "1337", selectedAddress: "0x1234567890" },
    "test test test test test test test test test test test test"
  );

  await page.reload();

  await page.click("#WalletNotConnected");

  // use a promise to wait
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 30000);
  });

  // Export the console errors
  console.log(consoleErrors);
  // return consoleErrors;
}

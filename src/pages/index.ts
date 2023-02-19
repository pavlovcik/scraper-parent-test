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

  // Navigate to the page and perform actions that may trigger console errors
  await page.click("#WalletNotConnected");

  // use a promise to wait
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 10000);
  });

  // Export the console errors
  console.log(consoleErrors);
  // return consoleErrors;
}

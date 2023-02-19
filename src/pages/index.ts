import { Page, Browser } from "puppeteer";
import { log } from "../scraper-kernel/src/logging";
export default async function pageController(browser: Browser, page: Page) {
  const consoleErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  // Navigate to the page and perform actions that may trigger console errors
  await page.click("#WalletNotConnected");

  // Export the console errors
  console.log(consoleErrors);
  return consoleErrors
}

import { Page, Browser } from "puppeteer";

// using this to load netlify because it has a dynamic subdomain and the page logic matcher doesn't support that now
const consoleErrors: string[] = [];
export default async function defaultPageController(browser: Browser, page: Page) {
  page.on("console", (message) => {
    if (message) {
      consoleErrors.push(message.text());
    }
  });

  // await page.click("#WalletNotConnected");

  // use a promise to wait
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 180000);
  });

  // Export the console errors
  console.log(consoleErrors);
  // return consoleErrors;
}

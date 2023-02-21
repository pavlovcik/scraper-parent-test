import { Browser, Page } from "puppeteer";
export default async function metaMaskOnboardingController(browser: Browser, page: Page) {


  // Now you can interact with the Dapp and Metamask using the specified state and mnemonic
  // ...

  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 10000);
  });
}

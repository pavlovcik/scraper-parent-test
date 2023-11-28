import { Page } from "puppeteer";

export async function walletConnectModal(page: Page) {
  const walletConnect = await page.waitForSelector("#WalletConnect button");
  await walletConnect?.click();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  await page.waitForSelector(
    "#__CONNECTKIT__ > div > div > div > div.sc-idXgbr.dWgQgj > div.sc-kDvujY.juXNVx.active > div.sc-csuSiG.hEdpAI > div > div > div > div.sc-hiDMwi.dyPmnV > button:nth-child(1)",
    { timeout: 5000 }
  );

  const connectKitButtons = await page.$$(`#__CONNECTKIT__ button`);
  for (const button of connectKitButtons) {
    // console.trace({ button });
    const buttonText = await page.evaluate((el) => el.textContent, button);
    if (buttonText?.includes("MetaMask")) {
      // console.trace({ metamaskButton: button });
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      await button.click();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      break;
    }
  }
}

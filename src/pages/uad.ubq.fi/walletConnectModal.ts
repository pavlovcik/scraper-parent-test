import { Page } from "puppeteer";

export async function walletConnectModal(page: Page) {
  const walletConnect = await page.waitForSelector("#WalletConnect");
  await walletConnect?.click();
  const metamaskSelect = await page.waitForSelector(
    "#__CONNECTKIT__ > div > div > div > div.sc-idXgbr.dWgQgj > div.sc-kDvujY.juXNVx.active > div.sc-csuSiG.hEdpAI > div > div > div > div.sc-hiDMwi.dyPmnV > button:nth-child(1)",
    { timeout: 1000 }
  );
  await metamaskSelect?.click();
}

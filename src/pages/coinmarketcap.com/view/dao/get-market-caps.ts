import puppeteer from "puppeteer";
import { getAttribute } from "../../../../utils";

export async function getMarketCaps(page: puppeteer.Page) {
  const marketCaps = await page.$$(`td:nth-child(7) span:last-child`);
  if (!marketCaps) {
    throw new Error(`No market caps found`);
  } else {
    const mcaps = await getAttribute(marketCaps, "textContent");
    return mcaps;
  }
}

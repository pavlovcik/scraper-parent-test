import puppeteer from "puppeteer";
import { getAttribute } from "../../../../utils";

export async function getCurrenciesPageURLs(page: puppeteer.Page) {
  const currencies = await page.$$(`td:nth-child(3) a[href^="/currencies/"]`);
  if (!currencies) {
    throw new Error(`No currencies found`);
  } else {
    const urls = await getAttribute(currencies, "href");
    return urls;
  }
}

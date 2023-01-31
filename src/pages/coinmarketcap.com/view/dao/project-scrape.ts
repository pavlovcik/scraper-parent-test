import puppeteer, { ElementHandle } from "puppeteer";
import { getProperty } from "../../../../utils";
import PageProps from "../../@types/page-props";

export async function projectScrape(page: puppeteer.Page, timeout: number) {
  const selector = `script#__NEXT_DATA__[type="application/json"]`;
  console.log(`...waiting for selector`);
  await page.waitForSelector(selector, { timeout });
  const propsHandler = (await page.$(selector)) as ElementHandle<Element>;
  const propsRawString = await getProperty(propsHandler, "textContent");
  const { props } = JSON.parse(propsRawString) as PageProps;
  const token = props.initialProps.pageProps.info;
  delete token.platforms;
  delete token.relatedCoins;
  delete token.relatedExchanges;
  delete token.wallets;
  delete token.holders;
  console.log(`got ${token.name}`);
  return token;
}

import { ElementHandle, Page, Browser } from "puppeteer";
export const scrollToBottom = async (page: Page) =>
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

export async function getProperty(element: ElementHandle, query: string) {
  const property = await element.getProperty(query);
  return (await property?.jsonValue()) as string;
}
export const getAttribute = async (
  elements: ElementHandle<Element>[],
  query: string
) => {
  const values = [] as string[];
  for (const element of elements) {
    const href = await getProperty(element, query);
    values.push(href);
  }
  return values;
};

export async function getHREFsFromAnchors(
  page: Page,
  selectors: string
): Promise<string[]> {
  const anchors = (await page.$$(selectors)) as
    | ElementHandle<HTMLAnchorElement>[]
    | null;
  if (!anchors) {
    throw new Error(`could not find the anchors`);
  }

  const destinations = [] as string[];
  for (const anchor of anchors) {
    const href = await anchor.evaluate(
      (element) => (element as HTMLAnchorElement).href
    );
    destinations.push(href);
  }
  return destinations;
}

import puppeteer from "puppeteer";
import scrape from "../../../../../scrape";
import { scrapeHrefsFromAnchors } from "../../../../../utils";
// gallery view default logic
// there's 84 pages as of 29 sep 2022
// there's 127 pages as of 12 oct 2022 // ???
export default async (browser: puppeteer.Browser, page: puppeteer.Page) => {
  const showcaseUrls = await scrapeHrefsFromAnchors(page, `a[href^="/showcase/"]`);
  const projectUrls = showcaseUrls.filter((element: string) => !element.includes("/page/")); // filter page links out
  projectUrls.push(showcaseUrls.pop() as string);
  const results = await scrape(projectUrls, browser);
  return results;
};

import { getHREFsFromAnchors } from "../../../../../utils/utils";
import { Browser, Page } from "puppeteer";
import scrape from "../../../../../scraper-kernel/src/scrape";
// src/scraper/src/scrape.ts
// src/pages/ethglobal.com/showcase/page/*/index.ts

// gallery view default logic
// there's 84 pages as of 29 sep 2022
// there's 127 pages as of 12 oct 2022 // ???
export default async (browser: Browser, page: Page) => {
  const showcaseUrls = await getHREFsFromAnchors(page, `a[href^="/showcase/"]`);
  const projectUrls = showcaseUrls.filter(
    (element: string) => !element.includes("/page/")
  ); // filter page links out
  projectUrls.push(showcaseUrls.pop() as string);
  const config = {
    pages: "src/pages",
    urls: projectUrls,
  };
  const results = await scrape(config, browser);
  return results;
};

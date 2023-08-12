import { getHREFsFromAnchors } from "../../../../../utils/utils";
import { Browser, Page } from "puppeteer";
import scrape from "../../../../../scraper-kernel/src/scrape";
import { PAGES_PATH } from "../../../../../scraper-kernel/src/PAGES_PATH";
// gallery view default logic
export default async function galleryViewLogic(browser: Browser, page: Page) {
  const showcaseUrls = await getHREFsFromAnchors(page, `a[href^="/showcase/"]`);
  const projectUrls = showcaseUrls.filter((element: string) => !element.includes("/page/")); // filter page links out
  projectUrls.push(showcaseUrls.pop() as string);
  const settings = {
    pages: PAGES_PATH,
    urls: projectUrls,
  };
  const results = await scrape(settings, browser);
  return results;
}

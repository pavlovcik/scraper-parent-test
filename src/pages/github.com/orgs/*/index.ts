import { Browser, Page } from "puppeteer";
import scrape from "../../../../scraper-kernel/src/scrape";

// https://github.com/orgs/*/repositories
// Just navigate a page up to
// https://github.com/orgs/*
export default async (browser: Browser, page: Page, pagesDirectory) => {
  const url = page.url() as string;
  const parts = url.split("/");
  parts.pop(); // remove last part of url
  const pageUp = parts.join("/");
  return await scrape({ urls: pageUp, pagesDirectory }, browser);
  // console.trace();
};

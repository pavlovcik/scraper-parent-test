import { Browser, Page } from "puppeteer";
import scrape from "../../../../scraper-kernel/src/scrape";

// https://github.com/orgs/*/repositories
// Just navigate a page up to
// https://github.com/orgs/*
export default async (browser: Browser, page: Page, pages) => {
  const url = page.url() as string;
  const parts = url.split("/");
  parts.pop(); // remove last part of url
  const pageUp = parts.join("/");
  return await scrape({ urls: pageUp, pages }, browser);
  // console.trace();
};

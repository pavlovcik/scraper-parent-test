import puppeteer from "puppeteer";
import Proxies from "../../../../proxies";
import ScrapedProject from "../../@types/scraped-project";
import { getCurrenciesPageURLs } from "./get-currencies-page-urls";
import { makeJobPerURL } from "./make-job-per-url";
import { scrollToBottomOfFirstTab } from "./scroll-to-bottom-of-first-tab";
const _proxyHandler = Proxies();

/**
 * The optimal proxy strategy is to begin by not using a proxy, and then if we receive a rate limit error,
 * we can switch to using a proxy. At this stage, we should do a race to select the highest performing proxy,
 * and then continue on with the scraping
 */

export type JobPending = () => Job;
export type Job = Promise<JobResult>;
export type JobResult = void | ScrapedProject;
export interface JobParams {
  url: string;
  browser: puppeteer.Browser;
  proxies: string[];
  timeout: number;
}

const TIMEOUT = 30000;
const CONCURRENCY = 4;

export default async function coinmarketcapViewDao(browser: puppeteer.Browser): Promise<ScrapedProject[]> {
  const proxyHandler = await _proxyHandler;
  const proxies = proxyHandler.storage.flattened;
  const jobs = [] as JobPending[];

  const page = await scrollToBottomOfFirstTab(browser);
  const urls = await getCurrenciesPageURLs(page);

  for (const url of urls) {
    const job = makeJobPerURL({ url, browser, proxies, timeout: TIMEOUT }); // TODO bake in an error handler
    jobs.push(job); // TODO create batch all with same URL for Promise.race
  }

  const batchResults = [] as JobResult[][];
  while (jobs.length) {
    const batch = jobs.splice(0, CONCURRENCY).map((f) => f());
    const batchResult = await Promise.all(batch);
    batchResults.push(batchResult); // TODO Promise.race between same URL ?
  }

  return [...batchResults.filter((s) => Boolean(s))].flat() as ScrapedProject[];
}

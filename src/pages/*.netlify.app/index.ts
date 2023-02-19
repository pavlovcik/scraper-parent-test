import { Page, Browser } from 'puppeteer';
import { log } from '../../scraper-kernel/src/logging';
export default async function projectViewController(
    browser: Browser,
    page: Page
  ) {
    log.ok(`loaded ${page.url()}`)
  }
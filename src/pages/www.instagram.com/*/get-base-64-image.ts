import fetch from "node-fetch";
import { log } from "../../../scraper-kernel/src/logging";
// import { Browser, Page } from 'puppeteer';

// export default async function getImageUrls(browser: Browser, profile: Page): Promise<ImageUrls> {

// }
export async function getBase64Image(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    const buffer = await response.buffer();
    return buffer.toString("base64");
  } catch (error) {
    log.error(error);
    return url;
  }
}

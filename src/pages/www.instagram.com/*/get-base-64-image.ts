import fetch from "node-fetch";
// import { Browser, Page } from 'puppeteer';

// export default async function getImageUrls(browser: Browser, profile: Page): Promise<ImageUrls> {

// }
export async function downloadBinaryImage(url: string): Promise<Buffer> {
  // try {
  const response = await fetch(url);
  const buffer = await response.buffer();
  return buffer;
  // } catch (error) {
  //   log.error(error);
  //   return url;
  // }
}

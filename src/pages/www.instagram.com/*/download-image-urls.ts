import { Browser, Page } from "puppeteer";
import { log } from "../../../scraper-kernel/src/logging";
import { ImageUrls } from "./get-profile-image-urls";
export default async function downloadImageUrls(browser: Browser, page: Page, imageUrls: ImageUrls): Promise<ImageUrls> {
  if (imageUrls.profilePicture) {
    imageUrls.profilePicture = await downloadImage(browser, imageUrls.profilePicture);
  }
  //   imageUrls.otherPictures = await Promise.all(imageUrls.otherPictures.map((url) => downloadImage(browser, url)));
  return imageUrls;
}

async function downloadImage(browser: Browser, url: string): Promise<string> {
  if (!url) {
    log.error(`No url provided`);
  }
  const page = await browser.newPage();
  const response = await page.goto(url, { waitUntil: "networkidle2" });
  const buffer = await response?.buffer();
  if (!buffer) {
    log.error(`Could not download image from ${url}`);
    return url;
  }
  const base64Image = buffer.toString("base64");
  await page.close();
  return base64Image;
}

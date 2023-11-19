import getImageUrls from "./get-image-urls";
import { Browser, Page } from "puppeteer";
import { ImageUrls } from "./get-image-urls";

export default async function instagramProfileController(browser: Browser, profile: Page): Promise<ImageUrls> {
  const images = await getImageUrls(browser, profile);
  return images;
}

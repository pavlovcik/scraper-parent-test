import { Browser, Page } from "puppeteer";
import getProfileImageUrls, { ImageUrls } from "./get-profile-image-urls";
import { getBase64Image } from "./get-base-64-image";
export default async function instagramProfileController(browser: Browser, profile: Page): Promise<ImageUrls> {
  const images = await getProfileImageUrls(browser, profile);
  if (images.profilePicture) {
    images.profilePictureBase64 = await getBase64Image(images.profilePicture);
  }
  return images;
}

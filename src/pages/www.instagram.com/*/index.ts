import fs from "fs";
import imageType from "image-type";
import path from "path";
import { Browser, Page } from "puppeteer";
import util from "util";
import { downloadBinaryImage } from "./get-base-64-image";
import getProfileImageUrls, { ImageUrls } from "./get-profile-image-urls";

const mkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);

export default async function instagramProfileController(browser: Browser, profile: Page): Promise<ImageUrls> {
  return await scrapeImages(browser, profile);
}

async function scrapeImages(browser: Browser, profile: Page) {
  const images = await getProfileImageUrls(browser, profile);

  let imageIndex = 0;

  if (images.profilePicture) {
    await saveImage(images.profilePicture, images.username, "profile-picture", imageIndex++);
  }

  if (images.otherPictures) {
    for (const picture of images.otherPictures) {
      await saveImage(picture, images.username, "other-picture", imageIndex++);
    }
  }

  return images;
}

async function saveImage(url: string, username: string, prefix: string, index: number): Promise<void> {
  const image = await downloadBinaryImage(url);
  const type = await imageType(image);
  const baseDir = path.join("instagram-pictures", username);
  await mkdir(baseDir, { recursive: true }); // Ensure the directory exists

  let fileName = path.join(baseDir, `${prefix}_${index}`);

  if (type) {
    fileName += `.${type.ext}`;
  } else {
    console.error("Could not determine the image type, defaulting to .jpg");
    fileName += ".jpg";
  }

  await writeFile(fileName, image);
}

function writeFileCallback(err: NodeJS.ErrnoException | null): void {
  if (err) {
    console.error(err);
  }
}

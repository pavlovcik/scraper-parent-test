import fs from "fs";
import imageType from "image-type";
import path from "path";
import { Browser, Page } from "puppeteer";
import util from "util";
import { log } from "../../../scraper-kernel/src/logging";
import { downloadBinaryImage } from "./get-base-64-image";
import getProfileImageUrls, { ImageUrls } from "./get-profile-image-urls";

const mkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);

export default async function instagramProfileController(browser: Browser, profile: Page): Promise<ImageUrls> {
  const cached = await checkCache(browser, profile);
  if (cached) {
    return cached;
  } else {
    return await scrapeImages(browser, profile);
  }
}

async function checkCache(browser: Browser, profile: Page): Promise<ImageUrls | null> {
  const profileUrl = profile.url();
  const profileHandle = profileUrl.split("/")[3];
  const profileDirectory = path.join("instagram-pictures", profileHandle);

  if (fs.existsSync(profileDirectory)) {
    log.info(`Profile ${profileHandle} has already been scraped. Skipping.`);
    try {
      const profileJsonPath = path.join(profileDirectory, `${profileHandle}.json`);
      const profileData = JSON.parse(await fs.promises.readFile(profileJsonPath, "utf-8"));
      const profile = profileData as ImageUrls;
      if (profile.error) {
        log.warn(`There was an error scraping profile last time ${profileHandle}: ${profile.error}`);
      }
      return profile;
    } catch (error) {
      log.warn(`Error reading cached profile data for ${profileHandle}`);
      return null;
    }
  }
  return null;
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

  const profileJsonPath = path.join("instagram-pictures", images.username, `${images.username}.json`);
  await writeFile(profileJsonPath, JSON.stringify(images));

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

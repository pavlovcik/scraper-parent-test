import { Browser, Page } from "puppeteer";
import { log } from "../../../scraper-kernel/src/logging";

export interface ImageUrls {
  username: string;
  profilePicture: string | null;
  profilePictureBase64: string | null;
  otherPictures: string[];
  error: unknown | null;
}

export default async function getProfileImageUrls(browser: Browser, page: Page): Promise<ImageUrls> {
  const buffer = {
    username: page.url().split("/")[3],
    profilePicture: null,
    profilePictureBase64: null,
    otherPictures: [],
    error: null,
  } as ImageUrls;

  page.on("response", async (response) => {
    // const responseHeaders = response.headers();
    response.status() === 429 && log.warn(`Rate limit exceeded for ${page.url()}`);
    // responseHeaders['x-ratelimit-remaining'] && log.info(responseHeaders['x-ratelimit-remaining']);
    // log.info(responseHeaders);
  });

  try {
    await page.waitForSelector('img[alt$="profile picture"]', { timeout: 5000 });
  } catch (error) {
    log.warn(`No selector for profile picture found for ${page.url()} possibly a "restricted" profile or rate limiting`);
    // // const responseHeaders = await page.getH
    // if (responseHeaders['x-ratelimit-remaining'] && parseInt(responseHeaders['x-ratelimit-remaining']) === 0) {
    //   log.warn(`Rate limit exceeded for ${page.url()}`);
    //   buffer.error = `Rate limit exceeded`;
    //   return buffer;
    // }
    const screenshotPath = `./screenshots/${buffer.username}.png`;
    await page.screenshot({ path: screenshotPath });

    const images = await page.$$eval("img", (images) => images.filter((img) => !img.src.startsWith("data:image")).map((img) => img.src));
    if (!images.length) {
      log.error(`No non-base64 encoded images found for ${page.url()}`);
      buffer.error = `No non-base64 encoded images found`;
      return buffer;
    } else {
      buffer.profilePicture = images[images.length - 1];
      // buffer.profilePicture = await getBase64Image(buffer.profilePicture);
    }

    buffer.error = error;
    return buffer;
  }

  const profilePictures = await page.$$eval('img[alt$="profile picture"]', (images) => images.map((img) => img.src));
  if (!profilePictures.length) {
    log.error(`No profile pictures found for ${page.url()}`);
    buffer.error = `No profile pictures found`;
    return buffer;
  }
  const profilePicture = profilePictures[0] as string | void;

  if (!profilePicture) {
    log.error(`No main profile picture found for ${page.url()}`);
    buffer.error = `No profile picture found`;
    return buffer;
  } else {
    buffer.profilePicture = profilePicture;
    // buffer.profilePicture = await getBase64Image(buffer.profilePicture);
  }

  const anchorImages = (await page.$$eval('a[href^="/p/"] img', (images) => images.map((img) => img.src))).filter((img) => img !== "") as AnchorImagesExample;

  if (!anchorImages.length) {
    log.error(`No images found for ${page.url()}`);
    buffer.error = `No images found`;
    return buffer;
  } else {
    buffer.otherPictures = anchorImages;
  }

  return buffer;
}

type AnchorImagesExample = [
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/343298274_618139153233580_1121630767061057720_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=F7H1qCSS5qsAX_RdMnf&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCRC9MaTrHkblJWjr6JIN_dvSfxvf_9xPv-NT8yJBMyMw&oe=655F9551&_nc_sid=8b3546",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/342326092_166096006046590_1127613679962939070_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=iwmO1MLecF4AX8s1unN&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBG3D53rfXs7B_91feGwZ6cDEleZYhlqG6yotb3LIq2RA&oe=655E0951&_nc_sid=8b3546",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/320903479_660096025801676_5515929139806759701_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=MuZami032BUAX-4n74j&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCgYiZcdXQltwOtbsdIN8PK18AYm51PKs5fBWqkG7JU3w&oe=655E33FB&_nc_sid=8b3546",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/279891211_686971255923432_2497328367218420468_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=HbteYuQxrN8AX-OW8i3&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBqDhwod341i3umDbiM_a06YMozKe3RChmp2YJbEAhx1A&oe=655FA4B6&_nc_sid=8b3546",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/272868590_4835321069891059_4970982783294604245_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=iaHKutaimNMAX9v3rh3&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDHbs3PkbKCr0sxQDIIx68QAU4bcUlmX0PkgMX3Cl419Q&oe=655F4CDC&_nc_sid=8b3546",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/272890943_4543615719081094_135909212750976696_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=a69C3SSeoH4AX_A29Vl&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBl38b6OL9joMhA1UNVzywQXr6Fs6JqHrCVVTJYR_COVg&oe=655EE0A8&_nc_sid=8b3546"
];

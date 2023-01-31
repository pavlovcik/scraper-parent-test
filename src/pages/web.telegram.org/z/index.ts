import puppeteer from "puppeteer";
import ss from "./crop-and-screenshot";
import jimp from "./jimp";
export default async (browser: puppeteer.Browser) => {
  const pages = await browser.pages();
  const page = pages[pages.length - 1];
  if (!page) {
    throw new Error("No page found");
  }

  await page.setRequestInterception(true);

  page.on("request", (request) => {
    console.log(">>", request.method(), request.url());
    request.continue();
  });

  page.on("response", async (response) => {
    console.log("<<", response.status(), response.url());

    if (response.url().includes("authed=1") && response.status() === 200) {
      console.log("logged in successfully");
    }
  });

  // await page.waitForNavigation({ waitUntil: "networkidle2" });

  await page.waitForSelector(`canvas`);
  await waitForTransitionEnd(`#auth-qr-form > div > div`);

  // const IMAGE_PATH = "dist/pages/web.telegram.org/z/index.png";
  const buffer = await ss({ page, selector: `canvas`, addHeight: false });
  const parsed = await jimp(buffer as Buffer);
  console.log({ parsed });
  return parsed;

  async function waitForTransitionEnd(querySelector: string) {
    return await page.evaluate((qS) => {
      return new Promise((resolve) => {
        const transition = document.querySelector(qS);
        const onEnd = function () {
          transition.removeEventListener("transitionend", onEnd);
          resolve(transition);
        };
        transition.addEventListener("transitionend", onEnd);
      });
    }, querySelector);
  }
};

// function phoneLoginHalfImplemented() {
//   const PHONE_NUMBER = process.env.TELEGRAM_PHONE_NUMBER;
//   if (!PHONE_NUMBER) {
//     throw new Error("TELEGRAM_PHONE_NUMBER is not defined");
//   }
//   return async (browser: puppeteer.Browser) => {
//     const pages = await browser.pages();
//     const page = pages[pages.length - 1];
//     if (!page) {
//       throw new Error("No page found");
//     }

//     const phoneLogin = await page.waitForSelector(`#auth-qr-form > div > button`);
//     //   setTimeout(async () => {
//     await phoneLogin?.click();
//     const phoneInput = await page.waitForSelector(`#sign-in-phone-number`);
//     await phoneInput?.type(PHONE_NUMBER);
//     await phoneInput?.press("Enter");
//     //   const container = await page.waitForSelector(`.qr-container`);
//     //   await container?.screenshot({ path: "src/pages/web.telegram.org/z/index.png" });
//     await page.close();
//     await browser.close();
//     process.exit(0);
//     //   }, 1000);
//   };
// }

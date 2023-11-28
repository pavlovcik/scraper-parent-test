import { Browser, HTTPRequest, Page } from "puppeteer";
import { facebookLoginPopup } from "./facebookLoginPopup";
import { loadCredentialsFromEnv } from "./load-credentials-from-env";
import { findByTagName } from "./test";

export default async function loginController(browser: Browser, page: Page) {
  // const login = await findByTagName("button", page, "Log in with Facebook");
  // await login?.click();

  // await sleep(5000); // hack

  // const moreOptions = await findByTagName("button", page, "MORE OPTIONS");
  // await moreOptions?.click();

  // await sleep(5000); // hack

  const CREDS = loadCredentialsFromEnv("INSTAGRAM_USERNAME", "INSTAGRAM_PASSWORD", "FACEBOOK_EMAIL", "FACEBOOK_PASSWORD");

  if (CREDS.FACEBOOK_EMAIL && CREDS.FACEBOOK_PASSWORD) {
    return await loginWithFacebook(browser, page, CREDS);
  } else if (CREDS.INSTAGRAM_USERNAME && CREDS.INSTAGRAM_PASSWORD) {
    return await loginWithInstagram(browser, page, CREDS);
  } else {
    throw new Error("No valid login credentials found in environment variables.");
  }
}

async function loginWithFacebook(browser: Browser, page: Page, { FACEBOOK_EMAIL, FACEBOOK_PASSWORD }: Record<string, string>) {
  const loginWithFacebook = await findByTagName("button", page, "Log in with Facebook");
  await loginWithFacebook?.click();

  await facebookLoginPopup(browser, FACEBOOK_EMAIL, FACEBOOK_PASSWORD);
  await page.waitForNavigation({ waitUntil: "networkidle2", timeout: 60000 }).catch((error) => console.log("error", error));

  const token = await findXAuthToken(page);
  return token;
}
async function loginWithInstagram(browser: Browser, page: Page, { INSTAGRAM_USERNAME, INSTAGRAM_PASSWORD }: Record<string, string>) {
  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]', INSTAGRAM_USERNAME);
  await page.waitForSelector('input[name="password"]');
  await page.type('input[name="password"]', INSTAGRAM_PASSWORD);
  await page.waitForSelector('button[type="submit"]');
  await page.click('button[type="submit"]');

  await page.waitForNavigation({ waitUntil: "networkidle2", timeout: 60000 }).catch((error) => console.log("error", error));
  const token = await findXAuthToken(page);
  return token;
}

async function findXAuthToken(page: Page) {
  return await new Promise((resolve, reject) => {
    page.on("request", (request) => {
      const token = _headerParser(request);
      if (token) {
        resolve(token);
      }
    });
  });

  function _headerParser(request: HTTPRequest) {
    const headers = request.headers();
    if (headers["x-auth-token"]) {
      return headers["x-auth-token"];
    }
  }
}

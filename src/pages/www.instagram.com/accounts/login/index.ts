import { Browser, HTTPRequest, Page } from "puppeteer";
import { facebookLoginPopup } from "./facebookLoginPopup";
import { findByTagName } from "./test";

export default async function loginWithFacebook(browser: Browser, page: Page) {
  // const login = await findByTagName("button", page, "Log in with Facebook");
  // await login?.click();

  // await sleep(5000); // hack

  // const moreOptions = await findByTagName("button", page, "MORE OPTIONS");
  // await moreOptions?.click();

  // await sleep(5000); // hack

  const loginWithFacebook = await findByTagName("button", page, "Log in with Facebook");
  await loginWithFacebook?.click();

  await facebookLoginPopup(browser);
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

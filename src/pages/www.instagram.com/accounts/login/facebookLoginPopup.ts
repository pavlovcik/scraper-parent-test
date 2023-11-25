import { Browser } from "puppeteer";
import { loadCredentialsFromEnv } from "./loadCredentialsFromEnv";

export async function facebookLoginPopup(browser: Browser) {
  const popupTarget = await browser.waitForTarget(target => target.url().startsWith("https://www.facebook.com/"));
  const popupPage = await popupTarget.page();

  if (!popupPage) {
    throw new Error("popupPage is null");
  }

  // Manipulate the contents of the popup page
  await popupPage.waitForSelector("#email");
  const { email, password } = loadCredentialsFromEnv();
  await popupPage.type(`#email`, email);
  await popupPage.type(`#pass`, password);
  await popupPage.click("#loginbutton");
}

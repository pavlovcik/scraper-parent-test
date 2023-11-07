import { Page } from "puppeteer";
import { log } from "@korrrba/scraper-kernel-fork/logging";
import { delay } from "../../utils/utils";

export async function testNavBar(page: Page) {
  const navbar = await page.waitForSelector(`#Sidebar`);
  // get anchors in navbar
  const anchors = await navbar?.$$("ul:nth-child(1) a");
  if (!anchors) {
    throw new Error("No anchors found in navbar");
  }
  // click each anchor
  for (const anchor of anchors) {
    // dont click on the anchor that has attribute href="/" because it will reload the page
    if ((await anchor?.evaluate((node) => node.getAttribute("href"))) === "/") {
      continue;
    }

    await anchor?.click();
    log.info(`Clicked ${await anchor?.evaluate((node) => node.textContent)}`);
    await delay(5000);
  }
}

import { Browser, Page } from "puppeteer";
import { pressMetaMaskNextButton } from "../../../../metamask-extension";
import { log } from '../../../../../scraper-kernel/src/logging';

// this is a hack to force loading the controller for
// src/pages/eabbjjmhckhabkmlefjbeidehgdgkdko/notification.html#connect/HYpyQ8QMm3ZcowYLg6KXj/confirm-permissions/index.ts
// but the chrome extension id changes randomly so we can't use it in the page logic matcher directly

export default async function confirmPermissionsHackController(browser: Browser, page: Page) {
    log.info(`confirmPermissionsHackController`);
    // await pressMetaMaskNextButton(browser, page);

}

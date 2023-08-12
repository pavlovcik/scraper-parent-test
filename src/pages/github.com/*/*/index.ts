import { Browser, Page } from "puppeteer";
import { log } from "../../../../scraper-kernel/src/logging";
import scrape from "../../../../scraper-kernel/src/scrape";
import { getHREFsFromAnchors } from "../../../../utils/utils";
import { PAGES_PATH } from "../../../../scraper-kernel/src/PAGES_PATH";
import { extractTextFrom } from "../profile";
export default async function gitHubRepoView(browser: Browser, page: Page) {
  log.warn(`this is a repository`);

  const contributorURLsUnique = await getContributorsFromList(page);

  if (contributorURLsUnique.length) {
    log.ok(contributorURLsUnique.join(", "));
    const config = { urls: contributorURLsUnique, pages: PAGES_PATH };
    const contributorData = await scrape(config, browser);
    return contributorData;
  }

  const latestCommitAuthorName = await getLatestCommitUserName(page);
  if (latestCommitAuthorName) {
    const authorGitHubPage = "https://github.com/".concat(latestCommitAuthorName);
    log.ok(authorGitHubPage);
    return await scrape({ urls: authorGitHubPage, pages: PAGES_PATH }, browser);
  }

  const avatarHref = await clickLatestCommitAvatar(page);
  if (avatarHref) {
    log.ok(avatarHref);
    return await scrape({ urls: avatarHref, pages: PAGES_PATH }, browser);
  }

  const errorMessage = `no contributors found on repo view?`;
  log.error(errorMessage);
  throw new Error(errorMessage);
}

// this is likely to be dynamically loaded when looking at a specific repository, due to the nesting of the url
// e.g. https://github.com/ubiquity/dollar

const selectors = {
  contributors: `a[data-hovercard-type="user"]:not([data-test-selector])`,
  soleContributor: `[data-hovercard-url^="/users/"]`,
  commitAuthor: `.commit-author`,
};

// three strategies:
// 1. look at the contributors list on the right side panel
// 2. look at the latest commit username on the top left
// 3. click on the latest commit username's avatar ?

async function getContributorsFromList(page: Page) {
  const contributorURLs = await getHREFsFromAnchors(page, selectors.contributors);
  const contributorURLsUnique = [...new Set(contributorURLs)];
  log.info(`contributors: ${contributorURLsUnique.length}`);
  return contributorURLsUnique;
}

async function getLatestCommitUserName(page: Page) {
  return await extractTextFrom(page, selectors.commitAuthor);
}

async function clickLatestCommitAvatar(page: Page) {
  // const soleContributor = await page.waitForSelector(selectors.soleContributor);
  // const href = await soleContributor?.evaluate((element) => (element as HTMLAnchorElement).href);
  const soleContributor = await getHREFsFromAnchors(page, selectors.soleContributor);
  const href = soleContributor?.shift();
  if (href) {
    log.info(`soleContributors: ${href}`);
  }
  return href;
}

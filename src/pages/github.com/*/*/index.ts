import { Browser, Page } from "puppeteer";
import { getHREFsFromAnchors } from "../../../../utils/utils";
import { extractTextFrom } from "../profile";
import fs from "fs";
import path from "path";
import { log } from "../../../../scraper-kernel/src/logging";
import scrape from "../../../../scraper-kernel/src/scrape";
import { resolveProjectPath } from "../../../../scraper-kernel/src/boot/events/search-for-import";
// this is likely to be dynamically loaded when looking at a specific repository, due to the nesting of the url
// e.g. https://github.com/ubiquity/dollar

const selectors = {
  contributors: `a[data-hovercard-type="user"]:not([data-test-selector])`,
  soleContributor: `[data-hovercard-url^="/users/"]`,
  commitAuthor: `.commit-author`,
};

export default async function gitHubRepoView(
  browser: Browser,
  page: Page,
  pages: string
) {
  log.warn(`this is a repository`);

  const contributorURLsUnique = await getContributorsFromList(page);

  if (contributorURLsUnique.length) {
    log.ok(contributorURLsUnique.join(", "));
    return await scrape(
      { urls: contributorURLsUnique, pages },
      browser
    );
  }

  const latestCommitAuthorName = await getLatestCommitUserName(page);
  if (latestCommitAuthorName) {
    const authorGitHubPage = "https://github.com/".concat(
      latestCommitAuthorName
    );
    log.ok(authorGitHubPage);
    return await scrape({ urls: authorGitHubPage, pages }, browser);
  }

  const avatarHref = await clickLatestCommitAvatar(page);
  if (avatarHref) {
    log.ok(avatarHref);
    return await scrape({ urls: avatarHref, pages }, browser);
  }

  const errorMessage = `no contributors found on repo view?`;
  log.error(errorMessage);
  throw new Error(errorMessage);
}

// three strategies:
// 1. look at the contributors list on the right side panel
// 2. look at the latest commit username on the top left
// 3. click on the latest commit username's avatar ?

async function getContributorsFromList(page: Page) {
  const contributorURLs = await getHREFsFromAnchors(
    page,
    selectors.contributors
  );
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
  const soleContributor = await getHREFsFromAnchors(
    page,
    selectors.soleContributor
  );
  const href = soleContributor?.shift();
  if (href) {
    log.info(`soleContributors: ${href}`);
  }
  return href;
}

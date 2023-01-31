import  { Page } from "puppeteer";
import { log } from "../../../utils";

export async function getLogin(page: Page) {
  return await extractTextFrom(page, `.vcard-username`);
}
// export async function getId(page: Page) {}
// export async function getNode_id(page: Page) {}
// export async function getGravatar_id(page: Page) {}
export async function getType(page: Page, contributions: number) {
  return contributions ? "User" : "Organization"; // Only Users have "contributions"
}
// export async function getSite_admin(page: Page) {}
export async function getName(page: Page) {
  return await extractTextFrom(page, `.vcard-fullname`);
}
export async function getCompany(page: Page) {
  return await extractTextFrom(page, `[aria-label^="Organization:"]`);
}
export async function getBlog(page: Page) {
  return await extractTextFrom(page, `[data-test-selector="profile-website-url"]`);
}
export async function getLocation(page: Page) {
  return await extractTextFrom(page, `[itemprop="homeLocation"]`);
}
export async function getEmail(page: Page) {
  const emails = await page.evaluate(() => document.body.textContent?.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi));
  if (emails?.length) {
    const email = emails.shift();
    if (email) {
      return email;
    }
  } else {
    return null;
  }
}
// export async function getHireable(page: Page) {}
export async function getBio(page: Page) {
  return await extractTextFrom(page, `[data-bio-text]`);
}
export async function getTwitter_username(page: Page) {
  let twitter = await scrapeTextNode(page, `[href*=twitter]`);
  twitter = twitter?.replace("@", "") ?? null; // remove @
  return trimmedOrNull(twitter);
}
export async function getPublic_repos(page: Page) {
  const repos = await extractTextFrom(page, `[href$="?tab=repositories"]`);
  if (repos) {
    const firstResult = repos.match(/\d+/)?.shift();
    if (firstResult) {
      return firstResult;
    }
  }
  return null;
}
// export async function getPublic_gists(page: Page) {
//   return notImplemented(page);
// }
export async function getFollowers(page: Page) {
  const followers = await extractTextFrom(page, `[href$="?tab=followers"]`);
  if (followers) {
    return followers.trim().split(" ").shift()?.trim();
  }
  return null;
}
export async function getFollowing(page: Page) {
  const followers = await extractTextFrom(page, `[href$="?tab=following"]`);
  if (followers) {
    return followers.trim().split(" ").shift()?.trim();
  }
  return null;
}
export async function getCreated_at(page: Page) {
  const years = await page.$$(`[aria-label^="Contribution activity in "]`);
  const latestYear = years[years.length - 1];
  const latestYearTextNode = await latestYear.getProperty("textContent");
  const text: string | null = await latestYearTextNode?.jsonValue();
  if (text) {
    return text;
  }
  return null;
}
// export async function getUpdated_at(page: Page) {
//   return notImplemented(page);
// }

export async function getContributions(page) {
  let contributions = await scrapeTextNode(page, `div.js-yearly-contributions h2`);
  const matched = contributions?.match(/[0-9]*/gim);
  if (matched) {
    contributions = matched.join(``);
    return contributions;
  }
  return null;
}

export async function extractTextFrom(page: Page, selector: string) {
  const text = await scrapeTextNode(page, selector);
  return trimmedOrNull(text);
}

function trimmedOrNull(value: string | null) {
  if (!value) {
    return null;
  }
  const trimmed = value.trim();
  if (trimmed.length) {
    return trimmed;
  }
  return null;
}

export async function scrapeTextNode(page: Page, selector: string) {
  const htmlElement = await page.$(selector);

  if (!htmlElement) {
    log.warn(`"${selector}" not found`);
    return null;
  }
  const htmlElementTextNode = await htmlElement.getProperty("textContent");
  const text: string | null = await htmlElementTextNode?.jsonValue();
  return text;
}

interface ExamplePercentages {
  Commits: 73;
  Issues: 16;
  "Pull requests": 6;
  "Code review": 5;
}

export async function getCodeStyle(page: Page): Promise<ExamplePercentages | null> {
  const selector = `data-percentages`;
  const element = await page.$(`[${selector}]`);
  let percentages;
  if (element) {
    percentages = await element.evaluate((el, $) => el.getAttribute($), selector);
    try {
      return JSON.parse(percentages);
    } catch (error) {
      void 0;
    }
  }
  return null;
}

export function getPercent(_of: keyof ExamplePercentages, codeStyle: ExamplePercentages | null) {
  if (!codeStyle) return null;
  return String(codeStyle[_of]);
}

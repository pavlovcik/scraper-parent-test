import { ElementHandle, Page, Browser } from "puppeteer";
export const getSourcedDate = () => new Date().toLocaleDateString();

export const scrollToBottom = async (page: Page) => await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

export async function getProperty(element: ElementHandle, query: string) {
  const property = await element.getProperty(query);
  return (await property?.jsonValue()) as string;
}
export const getAttribute = async (elements: ElementHandle<Element>[], query: string) => {
  const values = [] as string[];
  for (const element of elements) {
    const href = await getProperty(element, query);
    values.push(href);
  }
  return values;
};

export async function getActiveTab(browser: Browser) {
  const pages = await browser.pages();
  const page = pages[pages.length - 1];
  if (!page) {
    throw new Error("No page found");
  }

  return page;
}

export const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  fgBlack: "\x1b[30m",
  fgRed: "\x1b[31m",
  fgGreen: "\x1b[32m",
  fgYellow: "\x1b[33m",
  fgBlue: "\x1b[34m",
  fgMagenta: "\x1b[35m",
  fgCyan: "\x1b[36m",
  fgWhite: "\x1b[37m",

  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
};

export function colorizeText(text: string, color: keyof typeof colors): string {
  return colors[color].concat(text).concat(colors.reset);
}

export const log = {
  error: function errorLog(message: string, verbose?: number) {
    if (verbose && verbose >= 1) {
      console.error(colorizeText(`\t⚠ ${message}`, "fgRed"));
    }
  },
  ok: function okLog(message: string, verbose?: number) {
    if (verbose && verbose >= 2) {
      console.log(colorizeText(`\t⚠ ${message}`, "fgGreen"));
    }
  },
  warn: function warnLog(message: string, verbose?: number) {
    if (verbose && verbose >= 3) {
      console.warn(colorizeText(`\t⚠ ${message}`, "fgYellow"));
    }
  },
  info: function infoLog(message: string, verbose?: number) {
    if (verbose && verbose >= 4) {
      console.info(colorizeText(`\t⚠ ${message}`, "fgWhite"));
    }
  },
};

export async function getHREFsFromAnchors(page: Page, selectors: string): Promise<string[]> {
  const anchors = (await page.$$(selectors)) as ElementHandle<HTMLAnchorElement>[] | null;
  if (!anchors) {
    throw new Error(`could not find the anchors`);
  }

  const destinations = [] as string[];
  for (const anchor of anchors) {
    const href = await anchor.evaluate((element) => (element as HTMLAnchorElement).href);
    destinations.push(href);
  }
  return destinations;
}

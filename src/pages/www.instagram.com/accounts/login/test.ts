import { Page } from "puppeteer";

// Normalizing the text
function getText(linkText: string) {
  linkText = linkText.replace(/\r\n|\r/g, "\n");
  linkText = linkText.replace(/\ +/g, " ");

  // Replace &nbsp; with a space
  var nbspPattern = new RegExp(String.fromCharCode(160), "g");
  return linkText.replace(nbspPattern, " ");
}

// find the link, by going over all links on the page
export async function findByTagName(tagName: string, page: Page, linkString: string, caseSensitive = false) {
  const links = await page.$$(tagName);
  for (var i = 0; i < links.length; i++) {
    let valueHandle = await links[i].getProperty("innerText");
    let linkText = (await valueHandle.jsonValue()) as string;
    let text = getText(linkText);
    if (!caseSensitive) {
      linkString = linkString.toLowerCase();
      text = text.toLowerCase();
    }
    if (linkString == text) {
      return links[i];
    }
  }
  return null;
}

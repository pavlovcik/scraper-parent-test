import puppeteer from "puppeteer";
interface TestInterface {
  page: puppeteer.Page;
  path?: string;
  selector: string;
  addHeight: boolean;
}

export default async function cropAndScreenShot({ page, path, selector, addHeight }: TestInterface) {
  return await screenshotDOMElements({
    page,
    path,
    selector,
    addHeight,
  });
}

async function screenshotDOMElements({ page, path, selector, addHeight }: TestInterface) {
  const addWidth = 0;
  const padding = 0;

  if (!selector) {
    throw Error("Please provide a selector.");
  }

  const rect = await page.evaluate(
    (selector, addWidth, addHeight) => {
      let minX = Infinity;
      let minY = Infinity;
      let maxWidth = 0;
      let maxHeight = 0;
      const elements = document.querySelectorAll(selector);
      if (elements) {
        for (const element of elements) {
          const { x, y, width, height } = element.getBoundingClientRect();
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxWidth = addWidth ? maxWidth + width : Math.max(maxWidth, width);
          maxHeight = addHeight ? maxHeight + height : Math.max(maxHeight, height);
        }
        return {
          left: minX,
          top: minY,
          width: maxWidth,
          height: maxHeight,
        };
      }
      return null;
    },
    selector,
    addWidth,
    addHeight
  );

  if (!rect) {
    throw Error(`Could not find element that matches selector: ${selector}.`);
  }

  const params = {
    clip: {
      x: rect.left - padding,
      y: rect.top - padding,
      width: rect.width + padding * 2,
      height: rect.height + padding * 2,
    },
  } as puppeteer.ScreenshotOptions;

  if (path) {
    params.path = path;
  }
  return page.screenshot(params);
}

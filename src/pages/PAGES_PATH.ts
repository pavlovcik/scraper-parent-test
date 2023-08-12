export const PAGES_PATH = process.env.PAGES_PATH as string;
if (!PAGES_PATH) {
  throw new Error("process.env.PAGES_PATH not set");
}

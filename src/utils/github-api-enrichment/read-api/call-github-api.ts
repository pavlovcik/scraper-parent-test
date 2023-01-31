import { https } from "follow-redirects";

import dotenv from "dotenv";
dotenv.config();

const GITHUB_PERSONAL_ACCESS_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

export default function testGitHubApi(PATH: string) {
  if (!GITHUB_PERSONAL_ACCESS_TOKEN?.length) {
    throw new Error("no github personal access token found");
  }

  const options = {
    method: "GET",
    hostname: "api.github.com",
    path: PATH,
    headers: {
      Accept: "application/json",
      "User-Agent": "@ubiquity/scraper",
      Authorization: `Basic ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
    maxRedirects: 20,
  };

  const req = https.request(options, function (res) {
    const chunks = [] as Uint8Array[];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function (chunk: Uint8Array) {
      const body = Buffer.concat(chunks);
      const stringified = body.toString();
      try {
        console.log(JSON.parse(stringified));
      } catch (error) {
        console.warn(stringified);
      }
    });

    res.on("error", function (error) {
      console.error(error);
    });
  });

  req.end();
}

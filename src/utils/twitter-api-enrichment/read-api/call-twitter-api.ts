import { https } from "follow-redirects";

import dotenv from "dotenv";
import { log } from "../../../scraper-kernel/src/logging";
dotenv.config();

const TWITTER_OAUTH = process.env.TWITTER_OAUTH;

export default function testTwitterApi(PATH: string) {
  if (!TWITTER_OAUTH?.length) {
    throw new Error("no twitter personal access token found");
  }

  const options = {
    method: "GET",
    hostname: "api.twitter.com",
    path: PATH,
    headers: {
      Accept: "application/json",
      "User-Agent": "@ubiquity/scraper",
      Authorization: `Bearer ${TWITTER_OAUTH}`,
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
        log.ok(JSON.parse(stringified));
      } catch (error) {
        log.warn(stringified);
      }
    });

    res.on("error", function (error) {
      log.error(error);
    });
  });

  req.end();
}

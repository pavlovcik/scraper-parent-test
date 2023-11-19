import path from "path";
import commandLineArgs from "../../cli/cli-args";

import grab from "./fetch-from-supabase";
import writeCsvToDisk from "./json2csv";
import { resolvePagesPath } from "../../scraper-kernel/src/boot/events/search-for-import";
import { log } from "../../scraper-kernel/src/logging";

const tableName = commandLineArgs.table as string;

if (!tableName) {
  throw new Error("no table name provided");
}

async function _wrapper() {
  const data = await grab(tableName, "*");
  if (data.length) {
    const headers = Object.keys(data[0]);
    const date = Date.now();
    const filename = path.resolve(resolvePagesPath(), `database-export-${date}.csv`);
    writeCsvToDisk(headers, data, filename);
    log.ok(`wrote ${data.length} rows to ${filename}`);
  }
}

_wrapper();

import path from "path";
import commandLineArgs from "../../../cli-args";

import grab from "./fetch-from-supabase";
import writeCsvToDisk from "./json2csv";
import { resolveProjectPath } from "../../../scraper-kernel/src/boot/events/search-for-import";

const tableName = commandLineArgs.table as string;

async function _wrapper() {
  const data = await grab(tableName, "*");
  if (data.length) {
    const headers = Object.keys(data[0]);
    const date = Date.now();
    const filename = path.resolve(
      resolveProjectPath(),
      `database-export-${date}.csv`
    );
    writeCsvToDisk(headers, data, filename);
    console.log(`wrote ${data.length} rows to ${filename}`);
  }
}

_wrapper();

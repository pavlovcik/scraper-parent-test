import { Parser } from "json2csv";
import fs from "fs";
type Data = { [key: string]: any };

export default function writeCsvToDisk(headers, data: Data, filename: string) {
  const csv = renderCsv(headers, data);
  writeToDisk(filename, csv);
}

function renderCsv(headers: string[], data: Data) {
  // const headers = ["field1", "field2", "field3"];
  const opts = { fields: headers };
  try {
    const parser = new Parser(opts);
    const csv = parser.parse(data);
    //   console.log(csv);
    return csv;
  } catch (err) {
    console.error(err);
  }
}

function writeToDisk(filename: string, data: string) {
  fs.writeFileSync(filename, data);
}

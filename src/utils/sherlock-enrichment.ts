// ignore all eslint for this file
/* eslint-disable */

const chunkSize = 1000;
let offset = 0;

async function processChunks(TABLE_NAME: string) {
  const results = await runQuery(`SELECT login FROM "${TABLE_NAME}" LIMIT ${chunkSize} OFFSET ${offset}`);
  const logins = results.map((row) => row.login);

  const enrichedData = await runSherlock(logins);

  await updateDatabase(enrichedData);

  if (results.length === chunkSize) {
    offset += chunkSize;
    await processChunks(TABLE_NAME);
  }
}

async function runQuery(query: string): Promise<Array<{ login: string }>> {
  // Implement database query here
  return [{ login: "" }];
}

async function runSherlock(logins: string[]): Promise<Array<{ login: string; enrichedData: any }>> {
  // Implement call to sherlock script here
  return [{ login: "", enrichedData: {} }];
}

async function updateDatabase(enrichedData: Array<{ login: string; enrichedData: any }>): Promise<void> {
  // Implement update to database here
  return;
}

export default processChunks;

import dotenv from "dotenv";
import { log } from "../../../../scraper-kernel/src/logging";
dotenv.config();
export function loadCredentialsFromEnv<T extends string>(...envVars: T[]): Record<T, string> {
  const credentials: Partial<Record<T, string>> = {};

  for (const varName of envVars) {
    const value = process.env[varName];
    if (!value) {
      // throw new Error(`${varName} not found in .env file`);
      log.warn(`${varName} not found in .env file`);
    }
    credentials[varName] = value;
  }

  return credentials as Record<T, string>;
}

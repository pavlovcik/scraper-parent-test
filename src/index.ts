// import "source-map-support/register";
import dotenv from "dotenv";
dotenv.config();
import { log } from "./scraper-kernel/src/logging";
log.info(`Node.js version: ${process.version}`);
import "./cli/cli-entry";

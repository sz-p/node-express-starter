import { getConfig } from "../../utils/utils"
import bodyParser from "body-parser";
import cors from "./cors";
import { Express } from "express";
const config = getConfig()
if (!config) {
  console.error("No config file")
  process.exit(1)
}
const { REQUESTLIMITSIZE, whitelist } = config;

export const addLoader = function (app: Express) {
  if (whitelist.enable) {
    app.use(cors(whitelist.allowedOrigin));
  }
  app.use(bodyParser.json({ limit: REQUESTLIMITSIZE }));
  app.use(bodyParser.urlencoded({ limit: REQUESTLIMITSIZE, extended: false }));
}

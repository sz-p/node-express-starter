import appConfig from "../../configs/app.config";
import * as bodyParser from "body-parser";
import cors from "./cors";
import { Express } from "express";
const { REQUESTLIMITSIZE, whitelist } = appConfig;

export const addLoader = function (app: Express) {
  if (whitelist.enable) {
    app.use(cors(whitelist.allowedOrigin));
  }
  app.use(bodyParser.json({ limit: REQUESTLIMITSIZE }));
  app.use(bodyParser.urlencoded({ limit: REQUESTLIMITSIZE, extended: false }));
}

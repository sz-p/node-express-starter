import express from "express";
import appConfig from "../configs/app.config";
import routers from "./routers/routers";
import https from "https";
import fs from "fs";
import addLoader from "./loader/loader";
import paths from "../configs/paths";
const { PORT, REQUESTLIMITSIZE } = appConfig;

const app = express();

addLoader(app);

// init routers
routers.forEach((item) => {
  app[item.method](item.router, (req, res) => {
    const requestData = Object.assign(req.query, req.body);
    item
      .handler(requestData, req, res)
      .then((d) => res.send(d))
      .catch((d) => res.send(d));
  });
});

// start listen
if (appConfig.HTTPS.enable) {
  const options = {
    key: fs.readFileSync(appDirectory + appConfig.HTTPS.keyPath),
    cert: fs.readFileSync(appDirectory + appConfig.HTTPS.certPath),
  };
  https.createServer(options, app).listen(PORT);
} else {
  app.listen(PORT);
}

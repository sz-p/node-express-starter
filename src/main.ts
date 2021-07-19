import * as express from "express";
import appConfig from "../configs/app.config";
import { routers } from "./routers/routers";
import { addLoader } from "./loader/loader";
import * as https from "https";
import * as fs from "fs";
// import paths from "../configs/paths";
const { PORT, HTTPS } = appConfig;

const app = express();

addLoader(app);

// init routers
routers.forEach((item) => {
  switch (item.method) {
    case 'get':
    case 'post':
    case 'put':
    case 'delete': {
      app[item.method](item.router, (req, res) => {
        const requestData = Object.assign(req.query, req.body);
        item
          .handler(requestData, req, res)
          .then((d) => res.send(d))
          .catch((d) => res.send(d));
      });
      break;
    }
  }

});

// start listen
if (HTTPS.enable) {
  const options = {
    key: fs.readFileSync(HTTPS.keyPath),
    cert: fs.readFileSync(HTTPS.certPath),
  };
  https.createServer(options, app).listen(PORT);
} else {
  app.listen(PORT);
}

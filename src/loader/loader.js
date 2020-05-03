import appConfig from '../../configs/app.config';
import bodyParser from 'body-parser';
import cors from './cors';
const { REQUESTLIMITSIZE, whitelist } = appConfig;

export default function (app) {
  if (whitelist.enable) {
    app.use(cors(whitelist.allowedOrigin))
  }
  app.use(bodyParser.json({ limit: REQUESTLIMITSIZE }));
  app.use(bodyParser.urlencoded({ limit: REQUESTLIMITSIZE, extended: false }));
}

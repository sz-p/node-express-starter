import appConfig from '../../configs/app.config';
import bodyParser from 'body-parser';
const { REQUESTLIMITSIZE } = appConfig;

export default function (app) {
  app.use(bodyParser.json({ limit: REQUESTLIMITSIZE }));
  app.use(bodyParser.urlencoded({ limit: REQUESTLIMITSIZE, extended: false }));
}

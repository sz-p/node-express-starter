export default function (app) {
  app.use(bodyParser.json({ limit: REQUESTLIMITSIZE }));
  app.use(bodyParser.urlencoded({ limit: REQUESTLIMITSIZE, extended: false }));
}

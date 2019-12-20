import express from 'express';
import appConfig from '../configs/app.config';
import routers from './routers/routers';
import https from 'https';
import fs from 'fs';
import bodyParser from 'body-parser';

const { PORT } = appConfig;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '16mb', extended: false }));

// init routers
routers.forEach((item) => {
	app[item[1]](item[0], (req, res) => {
		const requestData = Object.assign(req.query, req.body);
		item[2](requestData).then((d) => res.send(d)).catch((d) => res.send(d));
	});
});

// start listen
if (appConfig.HTTPS.enable) {
	const options = {
		key: fs.readFileSync(appDirectory + appConfig.HTTPS.keyPath),
		cert: fs.readFileSync(appDirectory + appConfig.HTTPS.certPath)
	};
	https.createServer(options, app).listen(PORT);
} else {
	app.listen(PORT);
}

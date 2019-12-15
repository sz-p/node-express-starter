import express from 'express';
import appConfig from '../configs/app.config';
import routers from './routers/routers';

const { PORT } = appConfig;

const app = express();
app.listen(PORT);

routers.forEach((item, index) => {
	item(app);
});

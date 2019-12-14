import express from 'express';
import appConfig from '../configs/app.config';
const { PORT } = appConfig;

const app = express();
app.listen(PORT);

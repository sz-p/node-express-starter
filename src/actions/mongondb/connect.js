import mongoose from 'mongoose';
import config from '../../../configs/app.config';

const { host, port, dbName } = config.mongodb.mongodbConfig;

// Connection URL
const url = `mongodb://${host}:${port}`;

mongoose.connect(url);
mongoose.connection.on('connected', () => {
	console.log('mongo connect Success');
});
export default mongoose;

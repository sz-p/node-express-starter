import * as mongoose from 'mongoose';
import { getConfig } from "../../../utils/utils"

const config = getConfig()
const { user, password, host, port, dbName } = config.mongodb.mongodbConfig;

// Connection URL
const url = `mongodb://${user ? user + ':' : ''}${password ? password + '@' : ''}${host}:${port}/${dbName}`;

const db = mongoose.connection;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
db.once('connected', () => {
  console.log('mongo connect Success');
});
export default mongoose;

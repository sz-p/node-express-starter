import config from '../../../configs/app.config';
import * as mysql from 'mysql';

const mysqlConfig = config.mysql.mysqlConfig;

const pool = mysql.createPool(mysqlConfig);

export const query = function (sql: string, callback: Function) {
  pool.getConnection(function (err, conn) {
    if (err) {
      callback(err, null, null);
    } else {
      conn.query(sql, function (qerr, vals, fields) {
        // release connect
        conn.release();
        // callback
        callback(qerr, vals, fields);
      });
    }
  });
};

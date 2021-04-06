import { query } from './connect';

export const getUser = () => {
  return new Promise((resolve, reject) => {
    const sql = ``;
    query(sql, (error: any, results: unknown, fields: any) => {
      if (results) {
        resolve(results);
      } else {
        resolve(0);
      }
    });
  });
};


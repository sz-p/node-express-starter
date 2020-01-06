import { query } from './connect';

export const getUser = () => {
	return new Promise((resolve, reject) => {
		const sql = ``;
		query(sql, (error, results, fields) => {
			if (results) {
				resolve(results);
			} else {
				resolve(0);
			}
		});
	});
};

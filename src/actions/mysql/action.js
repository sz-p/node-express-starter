import { query } from './connect';

const getUser = () => {
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

export {
  export
}

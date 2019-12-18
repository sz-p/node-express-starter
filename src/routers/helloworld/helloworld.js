import RP from '../../responseformat';

/**
 * hello world Handle
 *
 * @param {String} projectID 项目ID
*/
export const helloWorldHandle = function() {
	return new Promise((resolve, reject) => {
		resolve(RP.success({ api: 'helloworld', data: 'helloworld' }));
	});
};

/**
 * hello world
 *
 * @param {Server} app
 */
export default function(app) {
	app.get('/helloworld', (req, res) => {
		// const requestData = Object.assign(req.query, req.body);
		helloWorldHandle().then((d) => res.send(d)).catch((d) => res.send(d));
	});
}

import RP from '../../responseformat';

/**
 * hello world Handle
 *
 */
export default function(requestData) {
	return new Promise((resolve, reject) => {
		resolve(RP.success({ api: 'helloworld', data: 'helloworld' }));
	});
}

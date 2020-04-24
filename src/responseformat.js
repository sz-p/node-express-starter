export default {
	success: function(msg) {
		return {
			success: true,
			status: 0,
			api: msg.api,
			information: msg.infor,
			data: msg.data
		};
	},
	error: function(msg) {
		return {
			success: false,
			status: msg.status || 1,
			api: msg.api,
			information: msg.infor,
			data: msg.data
		};
	}
};

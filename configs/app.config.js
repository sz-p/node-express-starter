export default {
	PORT: 4000,
	HTTPS: {
		enable: false,
		keyPath: '',
		certPath: ''
	},
	mysql: {
		mysqlConfig: {
			host: 'localhost',
			user: '',
			password: '',
			database: ''
		}
	},
	mongodb: {
		mongodbConfig: {
			host: 'localhost',
			port: '27017',
			dbName: ''
		}
	}
};

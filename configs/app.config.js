import allowedOrigin from "./allowedOrigin";
export default {
  PORT: 4000,
  REQUESTLIMITSIZE: '1mb',
  whitelist: {
    enable: false,
    allowedOrigin
  },
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
      user: '',
      password: '',
      host: 'localhost',
      port: '27017',
      dbName: ''
    }
  }
};

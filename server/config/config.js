let env = process.env.NODE_ENV || 'development';
let baseURL;

if (env === 'development' || env === 'test') {
  let config = require('./config.json');
  let envConfig = config[env];
  baseURL = 'http://localhost:3000';

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  })
} else {
  baseURL = 'https://todo-boi.herokuapp.com/';
}

module.exports = { baseURL };


const config = {
  username: process.env.MY_SQL_USER,
  password: process.env.MY_SQL_PASSWORD,
  database: process.env.MY_SQL_DATABASE,
  host: process.env.MY_SQL_HOST,
  dialect: 'mysql'
};

module.exports = {
  development: config,
  test: config,
  production: config
}
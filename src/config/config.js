
const config = {
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'password',
  database: process.env.MYSQLDATABASE || 'personal-blog-db',
  host: process.env.MYSQLHOST || 'database',
  port: process.env.MYSQLPORT || 3006,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config
}
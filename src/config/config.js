
const config = {
  username: 'root',
  password: 'password',
  database: 'personal-blog-db',
  host: 'database',
  dialect: 'mysql'
};

module.exports = {
  development: config,
  test: config,
  production: config
}
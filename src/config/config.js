
const config = {
  username: 'root',
  passwort: 'password',
  database: 'personal_blog-db',
  host: 'database',
  dialect: 'mysql'
};

module.exports = {
  development: config,
  test: config,
  production: config
}
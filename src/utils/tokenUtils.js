const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

const extractToken = (bearerToken) => {
  return bearerToken.split(' ')[1];
};

const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '15m' });
  return token;
}

module.exports = {
  extractToken,
  generateToken,
};
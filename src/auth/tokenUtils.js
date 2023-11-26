const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'secret';

const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '15m' });
  return token;
}

const getUserFromToken = (token) => {
const decoded = jwt.verify(token.split(' ')[1], SECRET_KEY);
return decoded.user.id;
};

module.exports = {
  generateToken,
  getUserFromToken,
};
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

const extractToken = (bearerToken) => {
  return bearerToken.split(' ')[1];
};

const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET_KEY);
  return token;
}

const getUserIdFromToken = (token) => {
  try {
    const splitedToken = extractToken(token);
    const decoded = jwt.verify(splitedToken, SECRET_KEY);
    console.log(decoded)
    return decoded.user.id;
  } catch {
    return null;
  }
}

module.exports = {
  extractToken,
  generateToken,
  getUserIdFromToken,
};
const jwt = require('jsonwebtoken');
const userService = require('../services/users.service');
const customError = require('../utils/customError');
const handleError = require('../utils/handleError');

const secret = process.env.JWT_SECRET;

const extractToken = (bearerToken) => {
  return bearerToken.split(' ')[1];
};

module.exports = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  try {
    if (!bearerToken) {
      throw new customError('Token not found', 401);
    }
    const token = extractToken(bearerToken);
    let decoded;
    try {
      decoded = jwt.verify(token, secret);
    } catch {
      throw new customError('Expired or Invalid token', 401);
    }
    const { status, data } = await userService.getUserById(decoded.user.id);
    if (status !== 200) throw new customError('Expired or Invalid token', 401);
    req.user = data;
    next();
  } catch (error) {
    const { status, data } = handleError(error);
    res.status(status).json(data);
  }
}
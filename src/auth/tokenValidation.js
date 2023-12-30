const jwt = require('jsonwebtoken');

const userService = require('../services/users.service');

const secret = process.env.JWT_SECRET || 'secret';

const extractToken = (bearerToken) => {
  return bearerToken.split(' ')[1];
};

module.exports = async (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, secret);
    const { status, data } = await userService.getUserById(decoded.user.id);

    if (status !== 200) {
      return res.status(401).json({ message: 'Expired or Invalid token' });
    }

    req.user = data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or Invalid token' });
  }
}
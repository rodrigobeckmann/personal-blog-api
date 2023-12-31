const { User } = require('../models');
const { generateToken } = require('../utils/tokenUtils');
const customError = require('../utils/customError');
const handleError = require('../utils/handleError');

const userLogin = async (email, password) => {
  try {
    if (!email || !password) throw new customError('Some required fields are missing', 422);
    const user = await User.findOne({ where: { email, password } }, { exclude: ['password'] });
    if (!user) throw new customError('Incorrect username or password', 401);
    const token = generateToken({ user });
    return { status: 200, data: { token } };
  } catch (error) {
    return handleError(error);
  }
}

const adminLogin = async (email, password) => {
  try {
    if (!email || !password) throw new customError('Some required fields are missing', 422);
    const user = await User.findOne({ where: { email, password, isAdmin: true } }, { exclude: ['password'] });
    if (!user) throw new customError('Incorrect username or password', 401);
    const token = generateToken({ user });
    return { status: 200, data: { token } };
  } catch (error) {
    return handleError(error);
  }
}

module.exports = {
  userLogin,
  adminLogin,
};

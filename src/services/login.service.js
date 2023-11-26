const { User } = require('../models');
const { generateToken } = require('../auth/tokenUtils');

const userLogin = async (email, password) => {
  if (!email || !password) return { status: 401, data: { message: 'Some required fields are missing' } };

  const user = await User.findOne({ where: { email, password } }, { exclude: ['password'] });

  if (!user) return { status: 401, data: { message: 'Incorrect username or password' } };

  const token = generateToken({ user });

  return { status: 200, data: { token } };
}

const adminLogin = async (email, password) => {
  if (!email || !password) return { status: 401, data: { message: 'Some required fields are missing' } };

  const admin = await User.findOne({ where: { email: email, password: password, isAdmin: true } }, { exclude: ['password'] });

  if (!admin) return { status: 401, data: { message: 'Incorrect username or password' } };

  const token = generateToken({ admin });

  return { status: 200, data: { token } };
}

module.exports = {
  userLogin,
  adminLogin,
};

const { User } = require('../models');
const { generateToken } = require('../auth/tokenUtils');

const userLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } }, { exclude: ['password'] });

  const token = generateToken({ user });

  return { status: 200, data: { token } };
}

module.exports = {
  userLogin,
};

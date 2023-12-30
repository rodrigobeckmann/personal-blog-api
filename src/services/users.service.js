const { User } = require('../models');
const customError = require('../utils/customError');
const handleError = require('../utils/handleError');

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) throw new customError('User not found!', 404);
    return { status: 200, data: user };
  } catch (error) {
    return handleError(error);
  }
}

const createUser = async (user) => {
  try {
    const { fullName, email, password } = user;
    if (!fullName || !email || !password) throw new customError('One or more required fields are missing!', 400);
    const foundUser = await User.findOne({ where: { email } });
    if (foundUser) throw new customError('This email is already in use!', 409);
    const newUser = await User.create(user);
    return { status: 201, data: newUser };
  } catch (error) {
    return handleError(error);
  }
}

module.exports = {
  getUserById,
  createUser,
}
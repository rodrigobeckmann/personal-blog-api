const { User } = require('../models');

const getUserById = async (id) => {
  const user = await User.findById(id);

  if (!user) return { status: 404, data: { message: 'User not found' } };

  return { status: 200, data: user };
}

const createUser = async (user) => {

  const { fullName, email, password } = user;

  if (!fullName || !email || !password) {
    return { status: 400, data: { message: "One or more required fields are missing!"}}
  }

  const foundUser = await User.findOne({ where: { email } });

  if (foundUser) {
    return { status: 409, data: { message: "This email is already in use!" } };
  }

  const newUser = await User.create(user);

  return { status: 201, data: newUser };
}

module.exports = {
  getUserById,
  createUser,
}
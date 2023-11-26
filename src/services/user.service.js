const { UserModel } = require('../models/user.model');

const getUserById = async (id) => {
  const user = await UserModel.findById(id);

  if (!user) return { status: 404, data: { message: 'User not found' } };

  return { status: 200, data: user };
}

exports.module = {
  getUserById,
};
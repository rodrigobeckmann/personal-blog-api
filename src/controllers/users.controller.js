const userService = require('../services/users.service');

const createUser = async (req, res) => {
  const { body } = req;

  const { status, data } = await userService.createUser(body);

  return res.status(status).json(data);
}

module.exports = {
  createUser,
}
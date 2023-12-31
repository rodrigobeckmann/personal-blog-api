const loginService = require('../services/login.service');

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.userLogin(email, password);
  return res.status(status).json(data);
}

const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.adminLogin(email, password);
  return res.status(status).json(data);
}

const verifyUser = async (req, res) => {
  const user = req.user;
  const { status, data } = await loginService.verifyUser(user);
  return res.status(status).json(data);
}

module.exports = {
  userLogin,
  adminLogin,
  verifyUser,
};
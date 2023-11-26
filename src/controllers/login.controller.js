const loginService = require('../services/login.service');

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.userLogin(email, password);
  return res.status(status).json(data);
}

module.exports = {
  userLogin,
};
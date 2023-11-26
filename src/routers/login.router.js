const { Router } = require('express');
const loginController = require('../controllers/login.controller');

const loginRouter = Router();

loginRouter.post('/', loginController.userLogin);
loginRouter.post('/admin', loginController.adminLogin);

module.exports = loginRouter;

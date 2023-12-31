const { Router } = require('express');
const loginController = require('../controllers/login.controller');
const authMiddleware = require('../middlewares/tokenValidation')

const loginRouter = Router();

loginRouter.post('/', loginController.userLogin);
loginRouter.post('/admin', loginController.adminLogin);
loginRouter.get('/verify', authMiddleware, loginController.verifyUser);

module.exports = loginRouter;

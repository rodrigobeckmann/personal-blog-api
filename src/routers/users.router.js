const { Router } = require('express');
const userController = require('../controllers/users.controller');

const usersRouter = Router();

usersRouter.post('/', userController.createUser);

module.exports = usersRouter;
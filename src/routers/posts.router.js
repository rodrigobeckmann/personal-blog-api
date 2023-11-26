const { Router } = require('express');
const postController = require('../controllers/posts.controller');

const postRouter = Router();

postRouter.get('/', postController.listAllPosts);

module.exports = postRouter;
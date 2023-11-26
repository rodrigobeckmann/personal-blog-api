const { Router } = require('express');
const postController = require('../controllers/posts.controller');

const postRouter = Router();

postRouter.get('/', postController.listAllPosts);
postRouter.post('/', postController.createPost);
postRouter.get('/:id', postController.getPostById);

module.exports = postRouter;
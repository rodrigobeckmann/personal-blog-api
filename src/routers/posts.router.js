const { Router } = require('express');
const postController = require('../controllers/posts.controller');
const authMiddleware = require('../middlewares/tokenValidation')

const postRouter = Router();

postRouter.get('/', postController.listAllPosts);
postRouter.post('/', authMiddleware, postController.createPost);
postRouter.get('/:id', postController.getPostById);
postRouter.patch('/:id', authMiddleware, postController.updatePost);
postRouter.delete('/:id', authMiddleware, postController.deletePost);

module.exports = postRouter;
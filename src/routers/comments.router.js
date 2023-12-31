const { Router } = require('express');
const commentController = require('../controllers/comments.controller');

const commentRouter = Router();

commentRouter.get('/:id', commentController.getCommentsByPostId);
commentRouter.post('/:id', commentController.createComment);

module.exports = commentRouter;
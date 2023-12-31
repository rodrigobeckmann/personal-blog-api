const commentService = require('../services/comments.service');
const { getUserIdFromToken } = require('../utils/tokenUtils');

const getCommentsByPostId = async (req, res) => {
  const { id } = req.params;
  const comments = await commentService.getCommentsByPostId(id);
  return res.status(comments.status).json(comments.data);
}

const createComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const userId = getUserIdFromToken(req.headers.authorization);
  const { status, data } = await commentService.createComment(id, content, userId);
  return res.status(status).json(data);
}

module.exports = {
  getCommentsByPostId,
  createComment,
};
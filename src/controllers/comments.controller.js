const commentService = require('../services/comments.service');

const getCommentsByPostId = async (req, res) => {
  const { id } = req.params;
  const comments = await commentService.getCommentsByPostId(id);
  return res.status(comments.status).json(comments.data);
}

module.exports = {
  getCommentsByPostId,
};
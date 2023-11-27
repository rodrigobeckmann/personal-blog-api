const { Comment } = require('../models');
const { Post } = require('../models');

const getCommentsByPostId = async (postId) => {

  const post = await Post.findByPk(postId);

  if (!post) {
    return { status: 404, data: { message: "Post doesn't exists!" } };
  }

  const comments = await Comment.findAll({ where: { postId } });
  return { status: 200, data: comments };
}

module.exports = {
  getCommentsByPostId,
};
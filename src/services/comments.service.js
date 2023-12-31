const { Comment } = require('../models');
const { Post } = require('../models');
const customError = require('../utils/customError');
const handleError = require('../utils/handleError');

const getCommentsByPostId = async (postId) => {
  try {
    const post = await Post.findByPk(postId);
    if (!post) throw new customError("Post doesn't exists!", 404);
    const comments = await Comment.findAll({ where: { postId } });
    return { status: 200, data: comments };
  } catch (error) {
    return handleError(error);
  }
}

const createComment = async (postId, content, userId) => {
  try {
    if (!content) throw new customError('Missing required fields!', 400);
    const post = await Post.findByPk(postId);
    if (!post) throw new customError("Post doesn't exists!", 404);
    await Comment.create({ content, userId: userId, postId: post.id  });
    return { status: 201 };
  } catch (error) {
    return handleError(error);
  }

}

module.exports = {
  getCommentsByPostId,
  createComment,
};
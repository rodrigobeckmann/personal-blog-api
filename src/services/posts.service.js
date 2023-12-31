const { Post } = require('../models');
const customError = require('../utils/customError');
const handleError = require('../utils/handleError');

const listAllPosts = async () => {
  try {
    const posts = await Post.findAll({ attributes: { exclude: ['userId', 'updatedAt'] } });
    return { status: 200, data: posts };
  } catch (error) {
    return handleError(error);
  }
}

const getPostById = async (id) => {
  try {
    const post = await Post.findByPk(id, { attributes: { exclude: ['userId', 'updatedAt'] } });
    if (!post) throw new customError('Post not found!', 404);
    return { status: 200, data: post };
  } catch (error) {
    return handleError(error);
  }
}

const createPost = async (title, content, user) => {
  try {
    if (!title || !content) throw new customError('Missing required fields!', 400);
    
    const verifyTitle = await Post.findOne({ where: { title } });
    if (verifyTitle) throw new customError('Title already registered!', 409);
    const post = await Post.create({ title, content, userId: user.id });
    return { status: 201, data: post };
  } catch (error) {
    return handleError(error);
  }
}

module.exports = {
  listAllPosts,
  createPost,
  getPostById,
};
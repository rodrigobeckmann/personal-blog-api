const { Post } = require('../models');
const { User } = require('../models');

const listAllPosts = async () => {
  const posts = await Post.findAll();
  return {status: 200, data: posts};
}

const getPostById = async (id) => {
  const post = await Post.findByPk(id);
  if (!post) {
    return {status: 404, data: {message: 'Post not found!'}};
  }
  return {status: 200, data: post};
}

const createPost = async (title, content, user) => {

  if (!title || !content) {
    return {status: 400, data: {message: 'Missing required fields!'}};
  }

  if (!user || !user.isAdmin) {
    return {status: 401, data: {message: 'Unauthorized user!'}};
  }

  const verifyTitle = await Post.findOne({ where: { title } });

  if (verifyTitle) {
    return {status: 409, data: {message: 'Title already registered!'}};
  }

  const post = await Post.create({ title, content, userId: user.id });
  return {status: 201, data: post};
}

module.exports = {
  listAllPosts,
  createPost,
  getPostById,
};
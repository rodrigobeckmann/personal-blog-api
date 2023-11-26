const { Post } = require('../models');
const { User } = require('../models');

const listAllPosts = async () => {
  const posts = await Post.findAll();
  return {status: 200, data: posts};
}

const createPost = async (title, content, userId) => {
  const post = await Post.create({ title, content, userId });
  return {status: 201, data: post};
}

module.exports = {
  listAllPosts,
  createPost,
};
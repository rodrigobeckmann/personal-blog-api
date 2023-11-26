const { Post } = require('../models');
const { User } = require('../models');

const listAllPosts = async () => {
  const posts = await Post.findAll();
  return {status: 200, data: posts};
}

const createPost = async (content, userId) => {
  const post = await Post.create({ content, userId });
  return {status: 201, data: post};
}

module.exports = {
  listAllPosts,
  createPost,
};
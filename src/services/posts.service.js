const { Post } = require('../models');
const { User } = require('../models');

const listAllPosts = async () => {
  const posts = await Post.findAll();
  return {status: 200, data: posts};
}

const createPost = async (title, content, user) => {

  if (!user.isAdmin) {
    return {status: 401, data: {message: 'Unauthorized user!'}};
  }

  const post = await Post.create({ title, content, userId: user.id });
  return {status: 201, data: post};
}

module.exports = {
  listAllPosts,
  createPost,
};
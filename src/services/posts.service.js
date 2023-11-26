const { Post } = require('../models');

const listAllPosts = async () => {
  const posts = await Post.findAll();
  return {status: 200, data: posts};
}

module.exports = {
  listAllPosts,
};
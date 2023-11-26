const postService = require('../services/posts.service');

const listAllPosts = async (req, res) => {
  const posts = await postService.listAllPosts();
  res.status(posts.status).json(posts.data);
}

module.exports = {
  listAllPosts,
};
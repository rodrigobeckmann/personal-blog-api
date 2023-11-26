const postService = require('../services/posts.service');
const { getUserFromToken } = require('../auth/tokenUtils');
const { is } = require('bluebird');

const listAllPosts = async (req, res) => {
  const posts = await postService.listAllPosts();
  res.status(posts.status).json(posts.data);
}

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const { id, isAdmin } = getUserFromToken(req.headers.authorization);
  if (!isAdmin) {
    return res.status(401).json({ message: 'Only admins can create posts' });
  }
  const post = await postService.createPost(title, content, id);
  res.status(post.status).json(post.data);
}

module.exports = {
  listAllPosts,
  createPost,
};
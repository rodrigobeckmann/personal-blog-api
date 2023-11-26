const postService = require('../services/posts.service');
const { getUserFromToken } = require('../auth/tokenUtils');

const listAllPosts = async (_req, res) => {
  const posts = await postService.listAllPosts();
  res.status(posts.status).json(posts.data);
}

const getPostById = async (req, res) => {
  const id = req.params.id;
  const post = await postService.getPostById(id);
  res.status(post.status).json(post.data);
}

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const user = getUserFromToken(req.headers.authorization);
  if (!user) return res.status(401).json({ message: 'Expired or invalid token!' });
  const post = await postService.createPost(title, content, user);
  res.status(post.status).json(post.data);
}

module.exports = {
  listAllPosts,
  createPost,
  getPostById,
};
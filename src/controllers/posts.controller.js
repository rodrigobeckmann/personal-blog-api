const postService = require('../services/posts.service');

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
  const user = req.user;
  const post = await postService.createPost(title, content, user);
  res.status(post.status).json(post.data);
}

const updatePost = async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  const user = req.user;
  const updatedPost = await postService.updatePost(id, title, content, user);
  res.status(updatedPost.status).json(updatedPost.data);
}

const deletePost = async (req, res) => {
  const id = req.params.id;
  const user = req.user;
  const post = await postService.deletePost(id, user);
  res.status(post.status).json(post.data);
}

module.exports = {
  listAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
};
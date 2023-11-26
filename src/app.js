const express = require('express');
const postRouter = require('./routers/posts.router');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use('/posts', postRouter);

module.exports = app;
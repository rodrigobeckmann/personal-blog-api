const express = require('express');
const postRouter = require('./routers/posts.router');
const loginRouter = require('./routers/login.router');

const app = express();

app.use(express.json());
app.use('/posts', postRouter);
app.use('/login', loginRouter);

module.exports = app;
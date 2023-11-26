const express = require('express');
const postRouter = require('./routers/posts.router');
const loginRouter = require('./routers/login.router');
const commentRouter = require('./routers/comments.router');
const userRouter = require('./routers/users.router');

const app = express();

app.use(express.json());
app.use('/posts', postRouter);
app.use('/login', loginRouter);
app.use('/comments', commentRouter);
app.use('/users', userRouter);

module.exports = app;
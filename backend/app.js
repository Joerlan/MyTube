const express = require('express');

const app = express();

app.use('/api/posts',(req, res, next)=> {
  const posts = [
    {
      id: "1",
      title: 'Post 1',
      content: 'content 1'
    },
    {
      id: "2",
      title: 'Post 2',
      content: 'content 2'
    }
  ]
  res.json({
    message: "Fetch Posts success!",
    posts: posts
  });
});

module.exports = app;

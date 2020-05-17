const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/posts',(req, res, next)=> {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Added!"
  });
});

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

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./model/post');


mongoose.connect('mongodb+srv://joerlan:dCAMjsTRQ1xWys7d@cluster0-gj1yn.mongodb.net/mytube?retryWrites=true&w=majority')
  .then(()=>{
    console.log('MongoDB Connected!');
  })
  .catch(()=>{
    console.log("Conection MongoDB Fail!");
});

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
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  //console.log(post);
  post.save().then(result => {
    res.status(201).json({
      message: "Added!",
      postId: result._id
    });
  });
});

app.get('/api/posts',(req, res, next)=> {
  Post.find().then(documents =>{
    res.json({
      message: "Fetch Posts success!",
      posts: documents
    });
  });
});

app.delete('/api/posts/:id',(req, res, next)=> {
  Post.deleteOne({_id: req.params.id}).then((result)=>{
    console.log(result);
    res.status(200).json({message: "Post Deleted"})
  })
});
module.exports = app;

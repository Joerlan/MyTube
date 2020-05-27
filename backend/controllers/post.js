const Post = require("../models/post");

exports.createPost = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    imagePath: url + "/images/" + req.file.filename,
    creator: req.userId
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully",
      post: {
        ...createdPost,
        id: createdPost._id
      }
    });
  });
}

exports.editPost = (req, res, next) => {
  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.file.filename
  }
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    imagePath: imagePath
  });
  Post.updateOne({ _id: req.params.id, creator: req.userId }, post).then(result => {
    if(result.n > 0){
      res.status(200).json({ message: "Update successful!" });
    } else {
      res.status(401).json({ message: "Not Authorized!" });
    }
  });
}

//pageIndex start from one, not zero
exports.findAllPaginated = (req, res, next) => {
  const pageSize = req.query.pagesize;
  const pageIndex = req.query.pageindex;
  const query = Post.find();
  let posts;
  if (pageSize && pageIndex){
    query
    .skip(pageSize * pageIndex)
    .limit(+pageSize);
  }

  query.then(result => {
    posts = result;
    return Post.count();
  }).then(count => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: posts,
      count: count
    });
  });
}

exports.findPostById = (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
}

exports.deletePost = (req, res, next) => {
  Post.deleteOne({ _id: req.params.id, creator: req.userId }).then(result => {
    if (result.n > 0) {
      res.status(200).json({ message: "Post deleted!" });
    } else {
      res.status(401).json({ message: "Not Authorized!" });
    }
  });
}

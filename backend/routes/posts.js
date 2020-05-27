const express = require("express");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");
const router = express.Router();

const PostCotroller = require("../controllers/post");

router.post("", checkAuth, extractFile, PostCotroller.createPost);

router.put("/:id", checkAuth, extractFile, PostCotroller.editPost);

router.get("", PostCotroller.findAllPaginated);

router.get("/:id", checkAuth, PostCotroller.findPostById);

router.delete("/:id", checkAuth, PostCotroller.deletePost);

module.exports = router;

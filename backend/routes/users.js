const express = require("express");
const UserCotroller = require("../controllers/user");

const router = express.Router();

router.post("/signup", UserCotroller.createUser);

router.post("/login", UserCotroller.userLogin);

module.exports = router;

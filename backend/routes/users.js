const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/user");
const router = express.Router();

// router.get("/signup", (req,res,next)=>{
//   console.log("ok");
//   res.status(200).json({message: "OK!!!"});
// });

router.post("/signup", (req,res,next)=>{
  bcrypt.hash(req.body.password, 10).then(passw => {
    const user = new User({
      email: req.body.email,
      password: passw
    });
    user.save().catch((err)=>{
      res.status(500).json({success: false, message: err})
    }).then((result)=>{
      res.status(201).json({success: true, message: "OK!!!"});
    });
  })
});

module.exports = router;

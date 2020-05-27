const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.createUser = (req,res,next)=>{
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
}

exports.userLogin = (req,res,next)=>{
  User.findOne({email:req.body.email}).then((user)=>{
    if(!user){
      return res.status("401").json({message: "E-mail not found"});
    }
    if(!bcrypt.compare(req.body.password,user.password)){
      return res.status("401").json({message: "Invalid Password!"});
    }

    const token = jwt.sign({email: user.email, userId: user._id},process.env.JWT_KEY, {expiresIn: "1h"})
    res.status(200).json({token: token, expiresInSec: 3600});
  }).catch((err)=>{
    console.log(err);
    res.status(500).json({message: "erro no servidor!"});
  });
}

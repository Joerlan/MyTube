const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postsRoutes = require("./routes/posts");
const usersRoutes = require("./routes/users");


mongoose.connect('mongodb+srv://joerlan:dCAMjsTRQ1xWys7d@cluster0-gj1yn.mongodb.net/mytube?retryWrites=true&w=majority')
  .then(()=>{
    console.log('MongoDB Connected!');
  })
  .catch(()=>{
    console.log("Conection MongoDB Fail!");
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);
module.exports = app;

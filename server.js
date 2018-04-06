const bodyParser = require('body-parser');
const express = require("express");
const path = require("path");
const port = 5000;
const api = require('./server/routes/api');
const low = require('lowdb');
const session= require("express-session");
const FileSync = require('lowdb/adapters/FileSync');
const app = express();
const NewsAPI = require('newsapi');
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
// parse application/json
app.use(bodyParser.urlencoded({ extended: false }))


app.use(function(req, res, next) {
  console.log(req.session);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use("/api",api);


app.use(express.static(path.join(__dirname,'dist')));

// app.get("/api/test",function(req,res){
// res.json({ a: 1 });
// })
app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(port, ()=>console.log(`server started on port ${port}`));

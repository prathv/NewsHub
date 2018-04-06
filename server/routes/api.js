const express = require('express');
const router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json')
const db = low(adapter);
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('c88c7651458d479fa3ab01484ff1cccb');

// Set some defaults (required if your JSON file is empty)
db.defaults({ posts: [], user: [], count: 0 }).write();

router.get("/test",(req,res)=>{
  res.json(db.get('posts'));
})

router.post("/register",(req,res)=>{
  let data = req.body.data;
  db.get('user')
  .push(data)
  .write()
  res.json({});
})

router.post("/login",(req,res)=>{
  let status = 401;
  let data = req.body.data;
  let user = db.get('user')
  .find({email:data.email})
  .value();

  if(typeof(user) == 'undefined'){
    res.json({status:401});

  }

  if(user.password === data.password){
    status = 200;
    res.json({status:status,name:user.name,email:user.email});
  }
  else{
    res.json({status:401});
  }
})

router.get("/news/sources",(req,res)=>{
  let news = {};
  newsapi.v2.sources({
}).then(response => {
    res.json(response);
});
})

router.post("/news/sources/details",(req,res)=>{
  let mSources = req.body.sources.source;
  newsapi.v2.topHeadlines({
  sources: mSources,
  language:'en'
}).then(response => {
  res.json(response);
});

})

router.post("/test",(req,res)=>{
  console.log(req.body);
  // db.get('posts')
  // .push({ id: 1, title: 'lowdb is awesome'})
  // .write()
  res.json({'status': 200})
})



module.exports = router;

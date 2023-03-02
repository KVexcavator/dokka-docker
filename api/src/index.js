const express = require('express')
const mongoose = require('mongoose')
const { connectDB } = require('./helpers/db')
const {host, port, db, authApiUrl} = require('./configuration/index')
const app = express()

const postSchema = new mongoose.Schema({
  name: String
});
const Post = mongoose.model('Post', postSchema);

const startServer = () => {
  app.listen(port, ()=>{
    console.log(`Started dokka-api on port:${port}!`)
    console.log(`On host:${host}`)
    console.log(`Our database:${db}`)

    const answer = new Post({ name: 'Answer' });
    answer.save(function(err, savedAnswer){
      if (err) return console.error(err)
      console.log("saveAnswer: ", savedAnswer)
    })

    // Post.find(function(err, posts){
    //   if (err) return console.error(err)
    //   console.log("posts: ", posts)
    // });
  })
}

app.get("/test", (req, res)=>{
  res.send("API server is working!")
})

app.get("/test", (req, res)=>{
  res.send("API server is working!")
})

app.get("/testwithcurrentuser", (req, res) =>{
  console.log( 'authApiUrl: ', authApiUrl)
  res.json({
    testwithcurrentuser: true
  })
})


new Promise((resolve, reject) => {
    connectDB()
    resolve()
  })
  .then(() => {
    startServer()
  })

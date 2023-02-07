const express = require('express')
const app = express()

app.get("/test", (req, res)=>{
  res.send("Ohhuitelniy project")
})

app.listen(3000, ()=>{
  console.log("Started dokka!")
})

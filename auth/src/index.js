const express = require('express')
const { connectDB } = require('./helpers/db')
const {host, port, db} = require('./configuration/index')
const app = express()

const startServer = () => {
  app.listen(port, ()=>{
    console.log(`Started sokka--auth on port:${port}!`)
    console.log(`On host:${host}`)
    console.log(`Our database:${db}`)
  })
}

app.get("/test", (req, res)=>{
  res.send("Auth server is working!!!")
})


new Promise((resolve, reject) => {
    connectDB()
    resolve()
  })
  .then(() => {
    startServer()
  })

const express = require('express')
const { connectDB } = require('./helpers/db')
const axios = require('axios')
const {host, port, db, apiUrl} = require('./configuration/index')
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

app.get('/testwithapidata', (req, res) => {
  axios.get(apiUrl + "/testapidata").then(response => {
    res.json({
      testapidata: response.data.testwithapi
    })
  })
})

app.get("/api/currentUser", (req, res) => {
  res.json({
    id: "333",
    email: "user@barmaley.com"
  })
})

new Promise((resolve, reject) => {
    connectDB()
    resolve()
  })
  .then(() => {
    startServer()
  })

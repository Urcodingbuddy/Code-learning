const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res){
  res.send('OR bata behen ke')
})

app.post('/backend-api/conversation', function(req, res){
    // run a machine lerning model
    res.send("Hello World!")
})


app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})
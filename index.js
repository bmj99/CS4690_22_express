console.log("Loading server...")
const PORT = 3000

const express = require('express')

const app = express()

// Load Middleware


// REST Endpoints / Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, function() {
  console.log(`Example app listening on Port: ${PORT}`)
})
console.log("Loading server...")
const PORT = 3000

const express = require('express')

const app = express()

// Load Middleware


// REST Endpoints / Routes
// Create post: server gives the ID. 

// Read get 1

// Update put: client specifies the ID, fully replaces. patch: partial replace

// Delete delete

// List get all

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, function() {
  console.log(`Example app listening on Port: ${PORT}`)
})
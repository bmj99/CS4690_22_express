console.log('Loading server...');
const PORT = 3000;
const db = require('./db.json');

const express = require('express');

const app = express();

// Load Middleware
// internal
app.use(express.static('public'));

// REST Endpoints / Routes
// Create post: server gives the ID.

// Read get all logs '/api/v1/logs?courseId=cs4690&uvuId=10111111'
app.get('/api/v1/logs', (req, res) => {
  const { courseId, uvuId } = req.query;
  // DEBUG res.send(`GET logs Course: ${courseId} UvuId: ${uvuId}`);

  // TODO
  // get the data from the json file
  // filter for only what you need
  // send it back
});

// Update put: client specifies the ID, fully replaces. patch: partial replace
app.post('/TODO', (req, res) => {
  res.send('Got a POST request');
  // DEBUG how do I know I got the right data passed in

  // TODO
  // change db (in memory)
  // write to file (persisted)
  // return success
  // TODO: AFTER getting post to work correctly, change to put here and on client (GUID stuff needs to happen on the back-end)
});

// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user');
// });

// Delete delete - We'll never be deleting anything since it is an archive

// List get all

app.listen(PORT, function () {
  console.log(`Example app listening on Port: ${PORT}`);
});

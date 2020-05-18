// Creating a Server in Express 
// 1. Import Library
var http = require('http')
var express = require('express');
// 2. Crete an Object
var app = express();
// Create a server with express as a listener
var server = http.createServer(app)
// 3. Handle Specific Paths
app.get('/', function (req, res) {
    res.send('<h1>This is a GET request at path: / </h1>')
})

// Create another endpoint
app.get('/tasks', function (req, res) {
    res.send('<h1>This is a GET request at path: /tasks </h1>')
})
// 4. Create a listener
server.listen(3000, function () {
    console.log('Listening to Port: 3000');
})
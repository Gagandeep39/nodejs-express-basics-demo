// Creating a Server in Express 
// 1. Import Library
var http = require('http')
var express = require('express');
// Read from a file
var fs = require('fs');
// 2. Crete an Object
var app = express();
// Create a server with express as a listener
var server = http.createServer(app)
// 3. Handle Specific Paths
app.get('/', function (req, res) {
    res.send('<h1>This is a GET request at path: / </h1>')
})

// Read from a file
app.get('/tasks', function (req, res) {
    fs.readFile('db.json', function (err, data) {
        // To read complete file
        // res.send(data.toString()); 
        // To read specifiec data
        var tasks = JSON.parse(data.toString()).task;
        // Appending .toString() will return a string
        res.send(tasks);
    })
})
// 4. Create a listener
server.listen(3000, function () {
    console.log('Listening to Port: 3000');
})
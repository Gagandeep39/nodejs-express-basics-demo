# Express JS 

## Features
- Fast development
- Provdes 2 template engine
- Used in Single/Multi page application 
- Used to handle Mutiple types of databases

## Steps to use NodeJs Express
- Install express by running the below command in project root directory
`npm i express`
- Import Express 
`var express = require('express');`
3. Create an Object
`var app = express();`
4. Handle various path
```
app.get('/', function (req, res) {
    res.send('<h1>This is a GET request at path: / </h1>')
})
```
5. Create a listener
```
app.listen(3000, function () {
    console.log('Listening to Port: 3000');
})
```

## Steps to Use Node JS + Express
1. Import Libraries
```
var http = require('http')
var express = require('express');
```
2. Crete an Object of Express
`var app = express();`
3. Create a server with express as a listener
`var server = http.createServer(app)`
4. Handle Specific Paths with Express
```
app.get('/', function (req, res) {
    res.send('<h1>This is a GET request at path: / </h1>')
})
```
5. Create an Http listener
```
server.listen(3000, function () {
    console.log('Listening to Port: 3000');
})
```

## Reading from a JSON File
1. Import files modiule
`var fs = require('fs');`
2. Create a method to read specific object in JSON
```
fs.readFile('db.json', function (err, data) {
        var tasks = JSON.parse(data.toString()).task;
        res.send(tasks);
    })
```

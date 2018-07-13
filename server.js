// server.js
var express = require('express');
var app = express();
var port = 8080;

// start the server
app.listen(port, function () {
    console.log('app started boskuh');
});

// route our app
app.get('/', function (req, res) {
    res.send('test boskuh');
});

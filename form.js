var express = require('express');
var connect = require('connect');
var app = express();

//middleware - extra functionality to web server
app.use(connect.urlencoded()); //req.body

app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);
console.log("Server started on port: " + process.argv[2]);

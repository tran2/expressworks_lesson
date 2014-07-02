/*
 * style 
 * npm install stylus
 */

var express = require('express');

var app = express();

var loc = process.argv[3] || (__dirname + '/public');
console.log("location: " + loc);
app.use(require('stylus').middleware(loc));
app.use(express.static(loc));

app.listen(process.argv[2]);
console.log("server started on localhost:"+process.argv[2]);

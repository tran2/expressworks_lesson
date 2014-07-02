/*
 * serve index.html file wihtout any routes
 * first argv = port
 * second argv = index.html file path
 */

var express = require('express');
var path = require('path');

var app = express();

//call static middleware
app.use(express.static(process.argv[3] || 
                path.join(__dirname, 'public')));



app.listen(process.argv[2]);

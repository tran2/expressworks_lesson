/*
 * create an app with homepage /home rendered by jade template
 * shows current date
 * jade template file's provided in the 2nd arg
 */

var express = require('express');
var jade = require('jade'); //use npm to install

var app = express();

//specify where to find template
console.log('template location: ' + process.argv[3]);
app.set('views', process.argv[3]);
//can use path.join(__dirname, 'template') to specify ./tempaltes

//specify engine to use
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);
console.log("Server started on port: " + process.argv[2]);

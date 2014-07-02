/*
 * reads a file
 * parse to JSON
 */

var express = require('express');
var fs = require('fs');

var app = express();

app.get('/books', function (req, res) {
    fs.readFile(process.argv[3], function(err, data) {
        if(err) return res.send(500);

        var object = JSON.parse(data);
        res.json(object);
    });

});

app.listen(process.argv[2]);

/*
  var express = require('express')
  var app = express()
  var fs = require('fs')
  
  app.get('/books', function(req, res){
    var filename = process.argv[3]
    fs.readFile(filename, function(e, data) {
      if (e) return res.send(500)
      try {
        books = JSON.parse(data)
      } catch (e) {
        res.send(500)
      }
      res.json(books)
    })
  })
  
  app.listen(process.argv[2])


 */

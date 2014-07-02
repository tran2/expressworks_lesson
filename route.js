/* extracts data from GET '/search'
 * ?results=recent&include_tabs=true
 * outputs back to user in JSON format
 */
var express = require('express');

var app = express();

app.get('/search', function(req, res) {
    console.log(req.query);
    //var results = req.query.results;
    //console.log(results); 
    res.type('application/json');
    res.send(req.query);
});

app.listen(process.argv[2]);

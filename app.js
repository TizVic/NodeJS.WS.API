'use strict';

var express = require('express');

var app = express();

var PORT = process.env.PORT || 11235;

// Middleware for ststic files
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res){

    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h2>Hello world!!</h2></body></html>');

});

app.get('/api', function(req, res){

    res.json( {"simon-says" : 'Hi guys!'} );

});

app.get('/api/number/:id', function(req, res){

    res.send('<html><head></head><body><h2>Number inputted: ' +
       '<code>' + req.params.id + '</code></h2>');

});

app.listen(PORT);


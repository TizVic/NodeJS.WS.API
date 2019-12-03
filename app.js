'use strict';

var express = require('express');

var app = express();

var PORT = process.env.PORT || 11235;

app.get('/', function(req, res){
    res.send('<html><head></head><body><h2>Hello world!!</h2></body></html>');
});

app.get('/api', function(req, res){
    res.json( {"simon-says" : 'Hi guys!'} );
});

app.listen(PORT);


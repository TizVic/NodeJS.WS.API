'use strict';

var express = require('express');

// body parser for POST/PUT/PATCH body
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 11235;

// body parser for POST/PUT/PATCH body
var urlencodedParser = bodyParser.urlencoded({extended: false});

// Middleware for static files
app.use('/assets', express.static(__dirname + '/public'));

// View Engine (EJS)
app.set('view engine', 'ejs');

// Minimal custom middleware [next()]
app.use('/', function (req, res, next) {
    console.log('Requested url: ' + req.url);
    next();
});

// POST body parsing
app.post('/person', urlencodedParser, function (req, res) {
   
    res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);

});

app.get('/', function(req, res){

    // No view Enging
    // res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h2>Hello world!!</h2></body></html>');

    // With View Engine
    res.render('index');

});

app.get('/api', function(req, res){

    res.json( {"simon-says" : 'Hi guys!'} );

});

app.get('/api/number/:id', function(req, res){

    // No View Engine
    // res.send('<html><head></head><body><h2>Number inputted: ' +
    //    '<code>' + req.params.id + '</code></h2>');

    // With view engine. ID is a placeholder to match in view
    // res.render('number', { ID: req.params.id});

    // With View Engine and QueryString
    res.render('number', { ID: req.params.id, QSTR: req.query.qstr });

});

app.listen(PORT);


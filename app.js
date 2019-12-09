'use strict';

var express = require('express');
var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var PORT = process.env.PORT || 11235;


// Middleware for static files
app.use('/assets', express.static(__dirname + '/public'));

// View Engine (EJS)
app.set('view engine', 'ejs');

// Minimal custom middleware [next()]
app.use('/', function (req, res, next) {
    console.log('Requested url: ' + req.url);
    next();
});


// Code in modules
htmlController(app);
apiController(app);

app.listen(PORT);


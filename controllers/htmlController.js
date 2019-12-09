// body parser for POST/PUT/PATCH body
var bodyParser = require('body-parser');

// body parser for POST/PUT/PATCH body
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

module.exports = function(app) {

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
    
    // POST body parsing - x-www-application
    app.post('/person', urlencodedParser, function (req, res) {
    
        res.send('Thank you!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);

    });

    app.post('/personjson', jsonParser, function (req, res) {

        res.send('Thank you for JSON data!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);

    });

}

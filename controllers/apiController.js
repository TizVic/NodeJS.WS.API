module.exports = function(app) {


    app.get('/api/person/:id', function(req, res){
        //get data from database
    });

    app.post('/api/person', function(req, res){
        //save to database
    });

    app.put('/api/person/:id', function(req, res){
        //update database
    });

    app.delete('/api/person/:id', function(req, res){
        //delete from database
    });

}
var express = require('express');
var app = express();
var port = 5000;

//Serve up static files
app.use(express.static('server/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var recordCollection = [];

//Record POST route
app.post('/records', function(req, res){
    console.log(req.body);
    var recordTosend = req.body;
    recordCollection.push(recordTosend);
    res.sendStatus(201);
    
});

// Record GET route
app.get('/records', function(req, res){
    res.send(recordCollection);
});



// Start up the server
app.listen(port, function(){
    console.log('listening on port la la la', port);
    
});
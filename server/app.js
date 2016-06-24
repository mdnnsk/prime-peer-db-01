var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

var assignment = require ('../models/assignments');

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

app.listen(8080, 'localhost', function (req, res) {
  console.log('listening on');

});

app.use(express.static('public'));

app.get('/', function(req,res){
  console.log('at base url');
  res.sendFile(path.resolve('views/index.html'));
});

app.post('/assignments', function(req,res){
  console.log('hit assignments post');
  console.log(req.body);
  var sendAss = new assignment ({
    assignment_number: req.body.assignment_number,
    student_name: req.body.student_name,
    score: req.body.score,
    date_completed: new Date()
  });
  sendAss.save(function(err){
    if (err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('student saved succesfully');
      res.sendStatus(200);
    }
  });

  app.get('/assignments', function(req,res){
    console.log('hit the get route');
      assignment.find()
      .then( function( data ){
        console.log(data);
        res.send( data );
      });
    });


});

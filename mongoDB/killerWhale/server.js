// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Requre mongoose
var mongoose = require('mongoose');
// Require path
var path = require('path');

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/killerWhale_db');

var WhaleSchema = new mongoose.Schema({
  name: String,
  color: String,
  weight: Number
});

// Routes *********************************************************************
// Mongoose automatically looks for the plural version of your model name, so a Whale model in Mongoose looks for 'dogs' in Mongo.
var Whale = mongoose.model('Whale', WhaleSchema);

// Routes go here!
app.get('/', function(req, res){
  Whale.find({}, function(err, results){
    if (err) { console.log(err); }
    res.render('index', { whales: results });
  });
});

// Create
app.post('/', function(req, res){
  // Create a new whale!
  Whale.create(req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/')
  });
});

// New
app.get('/new', function(req, res){
  res.render('new');
});

// Show
app.get('/:id', function(req, res){
  Whale.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('show', { whale: response[0] });
  });
});

app.get('/:id/edit/', function(req, res){
  Whale.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('edit', { whale: response[0] });
  })
});

// Update
app.post('/:id', function(req, res){
  Whale.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

// Delete
app.post('/:id/delete', function(req, res){
  Whale.remove({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});


// Setting our Server to Listen on Port: 8000
app.listen(3000, function() {
    console.log("listening on port 3000");
})

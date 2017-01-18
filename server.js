var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var mongo = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/sandbox';
var app = express();

// //middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);
app.use(express.static(__dirname + '/public'));
























var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('I hear you on port ' + port);
});

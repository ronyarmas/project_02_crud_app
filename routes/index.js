var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

var url = 'mongodb://localhost:27017/patientApp';


router.get('/', function(req, res) {
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('vitals').find().toArray(function(err, vitals) {
      res.render('index', {title: 'Glucose Journal', vitals: vitals  });
    });
  })
});

var latestEntry; //req.body.reading

router.post('/insert', function(req, res) {
  var bio = {
    reading: req.body.reading,
  };
 latestEntry = req.body.reading;
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('vitals').insertOne(bio, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted');
      db.close();
      res.json(result);
    });
  });
});

router.post('/update/:updateBg', function(request, response, next){
var result = {
  num: request.body.bgNum
};

var id = request.body.id;

mongo.connect(url, function(err, db){
  assert.equal(null, err);
  db.collection('vitals').updateOne({"_id": objectId(id)}, {$set: result});
  console.log(result);
  db.close();
  response.redirect('/');
  });
});


router.post('/delete', function(req, res) {

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('vitals').remove({reading: latestEntry})
  });
});









module.exports = router;

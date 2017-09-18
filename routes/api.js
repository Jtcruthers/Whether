var express = require('express');
var requests = require('unirest');
var googleMaps = require('google_directions');
var googlePlaces = require('google-places');
var wunderground = require('wunderground')('dbb1e59d2b834089');

var places = new googlePlaces("AIzaSyBbMbEiT7A7FEufY2pfU17JVEKs18s6fZs");
var router = express.Router();

router.get('/weather/:zipcode', function(req, res, next) {

  var wunderQuery = {
    zip: req.params.zipcode
  };

  wunderground.hourly(wunderQuery, function(err, forecasts) {
    res.json({"weather": forecasts});
  });

});

router.get('/weather/:lat/:lng', function(req, res, next) {

  var wunderQuery = {
    lat: req.params.lat,
    lng: req.params.lng
  };

  wunderground.hourly(wunderQuery, function(err, forecasts) {
    res.json({"weather": forecasts});
  });

});

router.get('directions/:location/:destination', function(req, res, next) {

  var output="";
  var params = {
    origin: "Ohio Stadium",
    destination: "Canes Olentangy Ohio",
    key: "AIzaSyBbMbEiT7A7FEufY2pfU17JVEKs18s6fZs"
  }

  googleMaps.getDirectionSteps(params, function( err, steps) {
    if (err) {
      console.log(err);
      return 1;
    }

    res.json({"directions": steps});

  });

});


module.exports = router;

var express = require('express');
var requests = require('unirest');
var googleMaps = require('google_directions');
var googlePlaces = require('google-places');
var wunderground = require('wunderground')('dbb1e59d2b834089');
var uriHelpers = require('../helpers/uri');

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

router.get('/directions/:origin/:destination', function(req, res, next) {

  var originParam = uriHelpers.getTestLocation(true);
  var destinationParam = uriHelpers.getTestLocation(false);

  var origin = decodeURI(originParam);
  var destination = decodeURI(destinationParam);

  var params = {
    origin: origin,
    destination: destination,
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

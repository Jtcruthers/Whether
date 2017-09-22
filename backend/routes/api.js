var express = require('express');
var requests = require('unirest');
var googleMaps = require('google_directions');
var googlePlaces = require('google-places');
var apiKeys = require('../helpers/keys');
var wunderground = require('wunderground')(apiKeys.wunderground);
var uriHelpers = require('../helpers/uri');

var places = new googlePlaces(apiKeys.google);
var router = express.Router();

function getWeatherZipcode(zip) {

  var wunderQuery = {
    zip: zipcode
  };

  wunderground.hourly(wunderQuery, function(err, forecasts) {
    return forecasts;
  });
}

function getWeatherLatLng(lat, lng) {

  var wunderQuery = {
    lat: lat,
    lng: lng
  };

  wunderground.hourly(wunderQuery, function(err, forecasts) {
    return forecasts;
  });

}

function isNewTimeIncrement(total, time) {
  


}

router.get('/directions/:origin/:destination', function(req, res, next) {

  //var origin = decodeURI(req.params.origin);
  //var destination = decodeURI(req.params.destination);
  var origin = decodeURI(uriHelpers.mockOrigin);
  var destination = decodeURI(uriHelpers.mockDestination);

  var params = {
    origin: origin,
    destination: destination,
    key: apiKeys.google 
  }

  googleMaps.getDirectionSteps(params, function(err, steps) {

    var durationInSeconds = 0; 
    var lastBreak = 0;
    let thirtyMinutesInSeconds = 1800;
    var breakLocations = [];

    var firstStep = steps.shift();
    durationInSeconds += firstStep.duration.value;
    breakLocations.push(firstStep.end_location);

    for(var stepIndex in steps) {
      var step = steps[stepIndex];
      time = step.duration.value; //Get time from step and add it to duration
      durationInSeconds += time;
      if(durationInSeconds - lastBreak > thirtyMinutesInSeconds) { //See if we need to check weather here

        var difference = durationInSeconds - lastBreak;
//        if (Math.floor(difference / thirtyMinutesInSeconds) == 1) { // Only one break needed
          breakLocations.push(step.end_location);
          lastBreak = durationInSeconds;
          continue;
 //       } else { //If the step's duration is longer than 30 minutes, we need to calculate it multiple stops
  //        continue;//TODO - complete this
   //     }
      }
      
    }

    //At this point, breakLocations contains all the locations we need to check weather-wise
    //Then return an list of objects, such as: [ { location: "location to display", weather: "weather to display" } ]

    res.json({"breakLocations": breakLocations, "directions": steps});

  });

});

module.exports = router;

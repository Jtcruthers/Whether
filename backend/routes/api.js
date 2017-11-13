let express = require('express');
let googleMaps = require('google_directions');
let apiKeys = require('../helpers/keys');
let wunderground = require('wunderground')(apiKeys.wunderground);
let cors = require('cors');

let router = express.Router();

function getWeatherZipcode(zip) {
  let wunderQuery = {
    zip: zipcode
  };

  wunderground.hourly(wunderQuery, function(err, forecasts) {
    return forecasts;
  });
}

function getWeatherLatLng(lat, lng) {

  let wunderQuery = {
    lat: lat,
    lng: lng
  };

  wunderground.hourly(wunderQuery, function(err, forecasts) {
    return forecasts;
  });

}

function breakStep(step, totalDistance) {
  let distance = step.distance.value;
  let breaks = [];

}


//allow CORS
router.use(cors());

router.get('/directions/:origin/:destination', function(req, res, next) {

  let origin = decodeURI(req.params.origin);
  let destination = decodeURI(req.params.destination);
  //var origin = decodeURI(uriHelpers.mockOrigin);
  //var destination = decodeURI(uriHelpers.mockDestination);

  let params = {
    origin: origin,
    destination: destination,
    key: apiKeys.google 
  }

  googleMaps.getDirectionSteps(params, function(err, steps) {

    let distanceInMeters = 0;
    let lastBreak = 0;
    let mileInMeters = 16000;
    let breakLocations = [];

    let firstStep = steps.shift();
    distanceInMeters += firstStep.distance.value;
    breakLocations.push(firstStep.start_location);

    for(let stepIndex in steps) {
      let step = steps[stepIndex];
      distance = step.distance.value; //Get time from step and add it to duration
      distanceInMeters += distance;
      while(distanceInMeters - lastBreak > mileInMeters) { //See if we need to check weather here
        let breakDistance = mileInMeters * breakLocations.length;
        breakLocations.push(step.end_location);
        lastBreak = distanceInMeters;
      }
      
    }

    //At this point, breakLocations contains all the locations we need to check weather-wise
    //Then return an list of objects, such as: [ { location: "location to display", weather: "weather to display" } ]

    res.json({"breakLocations": breakLocations, "directions": steps});

  });

});

module.exports = router;

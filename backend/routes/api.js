let express = require('express');
let googleMaps = require('google_directions');
let apiKeys = require('../helpers/keys');
let wunderground = require('wunderground')(apiKeys.wunderground);
let cors = require('cors');

let router = express.Router();

function breakStep(step, totalDistance) {
  let distance = step.distance.value;
  let breaks = [];

}

function getWeatherLatLng(lat, lng) {

    return new Promise(function(resolve, reject) {
        let wunderQuery = {
            lat: lat,
            lng: lng
        };

        wunderground.hourly(wunderQuery, function(err, forecasts) {
            if(err) {
                reject(err);
            } else {
                resolve(forecasts);
            }
        });
    });

}

async function getWeatherForBreaks(breaks) {
    let weatherBreaks = [];
    for (let brake of breaks) {
        let weather = await getWeatherLatLng(brake.lat, brake.lng); //do the wunderground query
        weatherBreaks.push({"weather": weather, "location": brake});
    }

    return weatherBreaks;
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

  googleMaps.getDirectionSteps(params, async function(err, steps) {

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
    let weatherForBreaks = await getWeatherForBreaks(breakLocations);
    res.json({"weather": weatherForBreaks, "directions": steps});

  });

});

module.exports = router;

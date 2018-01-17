let express = require('express');
let googleMaps = require('google_directions');
let apiKeys = require('../helpers/keys');
let wunderground = require('wunderground')(apiKeys.wunderground);
let cors = require('cors');
var geocoder = require('local-reverse-geocoder');
let retry = require('async-retry');

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

        wunderground.hourly(wunderQuery, function (err, forecasts) {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            if (forecasts.hourly_forecast == null || forecasts.hourly_forecast.length == 0)
              reject({});
            else
              resolve(forecasts.hourly_forecast); //when altering forecasts, our api messes up. not sure if altering things not yet gotten yet?
          }
        });
    });

}

function reverseGeocode(lat, lng) {

    return new Promise(function(resolve, reject) {
        let point = {
            'latitude': lat,
            'longitude': lng
        };

        geocoder.lookUp(point, function (err, res) {

            if (err)
                reject(err);
            else
                resolve(res[0][0].name); //only send the actual name of the city
        });
    });
}

async function getWeatherForBreaks(breaks) {
    let weatherBreaks = [];
    for (let brake of breaks) {
      let location = brake.location;
      let durationInHours = brake.durationInHours;

      //sometimes the hourly_forecast was blank, so we retry until there are no rejections
      let weather = await retry(async (bail, number) => {
        console.log(number);
        let weather = await getWeatherLatLng(location.lat, location.lng);

        return weather;
      }, { retries: 500 });


      let cityName = await reverseGeocode(location.lat, location.lng);
      weatherBreaks.push({ "weather": weather[durationInHours], "cityName": cityName, "durationInHours": durationInHours });
    }

    return weatherBreaks;
}

//allow CORS
router.use(cors());

//init geocoder
geocoder.init({}, function () {
    // geocoder is loaded and ready to run
});

router.get('/directions/:origin/:destination', function(req, res, next) {

  let origin = decodeURI(req.params.origin);
  let destination = decodeURI(req.params.destination);

  let params = {
    origin: origin,
    destination: destination,
    key: apiKeys.google 
  }

  googleMaps.getDirectionSteps(params, async function(err, steps) {

    let distanceInMeters = 0;
    let durationInSeconds = 0;
    let lastBreak = 0;
    let mileInMeters = 16000;
    let hourInSeconds = 3600;
    let breakLocations = [];

    let firstStep = steps.shift();
    distanceInMeters += firstStep.distance.value;
    breakLocations.push({ 'location': firstStep.start_location, 'durationInHours': 0 });

    for(let stepIndex in steps) {
      let step = steps[stepIndex];
      distance = step.distance.value; //Get time from step and add it to duration
      duration = step.duration.value;
      distanceInMeters += distance;
      durationInSeconds += duration;
      while(distanceInMeters - lastBreak > mileInMeters) { //See if we need to check weather here
        let breakDistance = mileInMeters * breakLocations.length;
        let durationInHours = Math.round(durationInSeconds / hourInSeconds);
        breakLocations.push({ 'location': step.end_location, 'durationInHours': durationInHours });
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

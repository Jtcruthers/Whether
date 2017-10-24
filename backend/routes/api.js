let express = require('express');
let requests = require('unirest');
let googleMaps = require('google_directions');
let googlePlaces = require('google-places');
let apiKeys = require('../helpers/keys');
let places = new googlePlaces(apiKeys.google);
let router = express.Router();

//allow CORS
router.use(cors());

router.get('/directions/:origin/:destination', function(req, res, next) {

  var origin = decodeURI(req.params.origin);
  var destination = decodeURI(req.params.destination);

  var params = {
    origin: origin,
    destination: destination,
    key: apiKeys.google 
  }

  googleMaps.getDirectionSteps(params, function(err, steps) {

    console.log(steps);

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
d    res.json({"breakLocations": breakLocations, "directions": steps});

  });

});

module.exports = router;

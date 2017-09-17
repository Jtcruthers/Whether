var express = require('express');
var router = express.Router();
debugger;
var googleMaps = require('google_directions');

/* GET users listing. */
router.get('/:location/:destination', function(req, res, next) {

  var output="";
  var params = {
    origin: "Ohio Stadium",
    destination: "Canes Olentangy Ohio",
    key: "AIzaSyAzoD6R1OJhUvM3gVSsBXuEucOMPbEjuM4"
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

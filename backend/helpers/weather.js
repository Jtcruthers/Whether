var wunderground = require('wunderground')(apiKeys.wunderground);

export const getWeatherZipcode = (zip) => {
  let wunderQuery = {
    zip: zip
  };

  wunderground.hourly(wunderQuery, function(err, forecasts) {
    return forecasts;
  });
}

export const getWeatherLatLng = (lat, lng) => {

  let wunderQuery = {
    lat: lat,
    lng: lng
  };

  wunderground.hourly(wunderQuery, function(err, forecasts) {
    return forecasts;
  });

}

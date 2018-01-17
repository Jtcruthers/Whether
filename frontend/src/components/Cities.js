import React from 'react';
import City from './City';

const Cities = ({ cities }) => (
  <div className="CityPage">
    {cities.map(function (city, id) {
      return (
        <div key={id} className={"CityDiv"}>
          <City name={city.cityName} weather={city.weather.hourly_forecast[city.durationInHours]} />
        </div>
    )
    })}
  </div>
);

export default Cities;
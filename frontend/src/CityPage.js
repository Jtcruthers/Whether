import React from 'react';
import City from './City';

const CityPage = ({ city }) => (
  <div className="CityPage">
    <City city={city} />
  </div>
);

export default CityPage;
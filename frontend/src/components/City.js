import React from 'react';

const City = ({city}) => (
  <div className="City">
    <h1>{city.name}</h1>
    <p>{city.forecast}</p>
  </div>
)

export default City;
import React from 'react';
import Origin from './Origin';
import Destination from './Destination';

const SearchForm = () => (
  <div>
    <form className="SearchForm">
      <Origin />
      <Destination />
      <input type="submit" value="Submit"/>
    </form>
  </div>
);

export default SearchForm;

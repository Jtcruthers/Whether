import React, { Component } from 'react';
import Origin from './Origin';
import Destination from './Destination';

class SearchForm extends Component {
  render() {
    return (
    <div>
        <form className="SearchForm">
          <Origin />
          <Destination />
	  <input type="submit" value="Submit"/>
	</form>  
        </div>
    );
  }
}

export default SearchForm;

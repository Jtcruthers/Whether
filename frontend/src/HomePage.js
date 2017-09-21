import React, { Component } from 'react';
import SearchForm from './SearchForm';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
	<div className="mainSearchDiv">
	  <SearchForm />
	</div>
      </div>
    );
  }
}

export default HomePage;

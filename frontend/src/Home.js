import React, { Component } from 'react';
import SearchForm from './SearchForm';

class Home extends Component {
  render() {
    return (
      <div className="Home">
	<div className="mainSearchDiv">
	  <SearchForm />
	</div>
      </div>
    );
  }
}

export default Home;

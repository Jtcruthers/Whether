import React, { Component } from 'react';

import SearchForm from './SearchForm';
import HandlerButton from './HandlerButton';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
	<div className="mainSearchDiv">
	  <SearchForm />
          <HandlerButton handler={this.props.handler} />
	</div>
      </div>
    );
  }
}

export default HomePage;

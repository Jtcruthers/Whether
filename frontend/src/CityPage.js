import React, { Component } from 'react';
import City from './City';

class CityPage extends Component {

  render() {
    return (
      <div className="CityPage">
        <City city=this.props.city />
      </div>
    );
  }
}

export default CityPage;

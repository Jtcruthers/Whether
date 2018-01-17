import React from 'react';
import City from './City';
import '../css/Cities.css';

let Spinner = require('react-spinkit');

class Cities extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cities: props.cities
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ cities: props.cities }); // This will update your component.
  }

  render() {
    if (this.state.cities.length > 0) {
      console.log(this.state.cities);
      return (
        <div className="CityPage">
          {this.state.cities.map(function (city, id) {
            return (
              <div key={id} className="CityDiv">
                <City name={city.cityName} weather={city.weather} id={id}/>
              </div>
            )
          })}
        </div>
      )
    } else
      return (
        <div className="CityPage">
          <Spinner className={"Spinner"} />
        </div>
      )
  }

};

export default Cities;

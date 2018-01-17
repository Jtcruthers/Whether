import React from 'react';
import City from './City';
import '../css/ResultsPage.css';

class Cities extends React.Component {

  constructor(props) {
    super(props);

    tFhourlyis.state = {
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
              <div key={id} className={"CityDiv"}>
                <City name={city.cityName} weather={city.weather} />
              </div>
            )
          })}
        </div>
      )
    } else
      return (
        <div className="CityPage">
          <p>loading cities</p>
        </div>
      )
  }

};

export default Cities;

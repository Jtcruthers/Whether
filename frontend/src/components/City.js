import React from 'react';
import '../css/City.css'

class City extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: props.name, weather: props.weather, id: props.id };
  }

  componentWillReceiveProps(props) {
    console.log(this.state.name + "is changing props");
    this.setState({ name: props.name, weather: props.weather, id: props.id }); // This will update your component.
  }

  render() {
    console.log(this.state);
    return (
      <div className="City w3-card">
        <header className="w3-container w3-green">
          <h3>{this.state.id + 1} - {this.state.name}</h3>
        </header>
        <div className="w3-container data">
          <p>{this.state.weather.condition}</p>
          <p>{this.state.weather.temp.english} F &#176;</p>
        </div>
      </div>
    )
  }

};

export default City;

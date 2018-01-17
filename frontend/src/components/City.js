import React from 'react';
import '../css/ResultsPage.css';


class City extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: props.name, weather: props.weather };
  }

  componentWillReceiveProps(props) {
    console.log(this.state.name + "is changing props");
    this.setState({ name: props.name, weather: props.weather }); // This will update your component.
  }

  render() {
    console.log(this.state);
    return (
      <div className="City">
        <h3>{this.state.name}</h3>
        <p>{this.state.weather.condition}</p>
      </div>
    )
  }

};

export default City;

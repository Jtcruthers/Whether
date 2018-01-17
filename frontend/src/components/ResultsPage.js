import React from 'react';
import axios from 'axios';
import Directions from './Directions';
import Cities from './Cities';
import ToggleButton from './ToggleButton';
import '../css/ResultsPage.css';

let Spinner = require('react-spinkit');


class ResultsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = { fetched: props.fetched, directions: [], cities: [] };
    }

  componentDidMount() {
    const origin = encodeURIComponent(this.props.origin);
    const destination = encodeURIComponent(this.props.destination);
    const baseURL = 'http://localhost:3001/api/directions/';

    axios.get(baseURL + origin + '/' + destination)
      .then(res => {
         this.props.fetchPostsSuccess(res.data);
      });
  }

  componentWillReceiveProps(props) {
      this.setState({ cities: props.cities, directions: props.directions, fetched: props.fetched }); // This will update your component.
  }

  render() {
      if (this.state.fetched) {
          return (
              <div className="ResultsPage">
                  <h2>Weather Along The Trip</h2>
                  <Cities cities={this.state.cities} />
                  <h2>Directions</h2>
                  <Directions directions={this.state.directions} />
                  <ToggleButton text="Back" onClick={this.props.toggleSubmitted} />
              </div>
          )
      } else
          return (
              <div className="ResultsPageLoading">
                  <Spinner name='double-bounce' />
              </div>
          )
  }
};

export default ResultsPage;

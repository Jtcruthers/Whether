import React from 'react';
import axios from 'axios';
import Directions from './Directions';
import '../css/ResultsPage.css';


class ResultsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = { fetched: props.fetched };
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
      this.setState({ cities: props.cities, directions: props.cities, fetched: props.fetched }); // This will update your component.
  }

  render() {

    return (
      <div className="ResultsPage">
        <h2>Directions</h2>
        <Directions directions={this.props.directions} />
      </div>
    )

  }

};

export default ResultsPage;

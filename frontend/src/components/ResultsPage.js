import React from 'react';
import axios from 'axios';
import ToggleButton from '../components/ToggleButton';
import ResultsTable from './ResultsTable';
import '../css/ResultsPage.css';


class ResultsPage extends React.Component {

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
    this.setState({breakLocations: props.breakLocations, directions: props.directions}); // This will update your component.
  }

  render() {

    return (
      <div className="ResultsPage">
        <ResultsTable directions={this.props.directions || []} />
        <ToggleButton text="Back" onClick={this.props.toggleSubmitted}/>
      </div>
    )
  }

};

export default ResultsPage;

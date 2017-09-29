import React, { Component } from 'react';

import ResultsTable from './ResultsTable';
import HandlerButton from './HandlerButton';
import './css/ResultsPage.css';

class ResultsPage extends Component {

  render() {
    return (
      <div className="ResultsPage">
        <ResultsTable />
        <HandlerButton handler={this.props.handler} />
      </div>
    );
  }
}

export default ResultsPage;

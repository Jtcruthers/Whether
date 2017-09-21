import React, { Component } from 'react';

class ResultsTable extends Component {
  render() {
    return (
    <div className="ResultsTable">
      <table>
        <tr>
          <th>City</th>
          <th>Weather</th>
        </tr>
        <tr>
          <td>Columbus</td>
          <td>Sunny</td>
        </tr>
        <tr>
          <td>Greensboro</td>
          <td>Partly Cloudy</td>
        </tr>
      </table>
    </div>
    );
  }
}

export default ResultsTable;

import React from 'react';
import '../css/ResultsPage.css';


class ResultsTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      directions: []
    }
  }

  componentWillReceiveProps(props) {
    this.setState({directions: props.directions}); // This will update your component.
  }

  render() {

    return (
      <div className="ResultsTable">
        <table>
          <tbody>
            {this.state.directions.map(function(direction){
              return (
                <tr>
                  <td>{direction.html_instructions.replace(/<\/?[^>]+(>|$)/g, "")}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

};

export default ResultsTable;

import React, { Component } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import ResultsPage from './ResultsPage';

import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { hasBeenSubmitted: false };
    this.handler = this.handler.bind(this);
  }

  handler(e) {
    e.preventDefault();
    let hasBeenSubmitted = this.state.hasBeenSubmitted || false;
    this.setState({hasBeenSubmitted: !hasBeenSubmitted});
  }

  render() {
    const submitted = this.state.hasBeenSubmitted;

    return (
      <div className="App">
        <Header />
      {!submitted && 
        <HomePage handler = {this.handler} />
      }
      {submitted &&
        <ResultsPage handler = {this.handler}/>
      }
      </div>
    );
  }
}

export default App;

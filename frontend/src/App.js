import React, { Component } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import ResultsPage from './ResultsPage';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasBeenSubmitted: true };
  }

  render() {
    const submitted = this.state.hasBeenSubmitted;

    return (
      <div className="App">
        <Header />
      {!submitted && 
        <HomePage />
      }
      {submitted &&
        <ResultsPage />
      }
      </div>
    );
  }
}

export default App;

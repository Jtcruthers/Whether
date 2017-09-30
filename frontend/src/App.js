import React from 'react';
import Header from './Header';
import HomePage from './HomePage';
import ResultsPage from './ResultsPage';
import './css/App.css';

const App = () => (
    <div className="App">
      <Header />
      <HomePage />
      <ResultsPage />
    </div>
)

export default App;

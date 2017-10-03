import React from 'react';
import ToggleButton from '../components/ToggleButton';
import ResultsTable from './ResultsTable';
import '../css/ResultsPage.css';

const ResultsPage = ({toggleSubmitted}) => (
  <div className="ResultsPage">
    <ResultsTable/>
    <ToggleButton text="Back" onClick={toggleSubmitted}/>
  </div>
);

export default ResultsPage;

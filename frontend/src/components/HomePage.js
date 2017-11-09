import React from 'react';
import FormInput from './FormInput';
import ToggleButton from '../components/ToggleButton';
import styles from '../css/HomePage.css';

const HomePage = ({toggleSubmitted, editOrigin, editDestination}) => (
  <div className="HomePage">
    <div className="MainSearchDiv">
      <form className="pure-form pure-form-stacked">
        <FormInput title="Origin" onChange={editOrigin}/>
        <FormInput title="Destination" onChange={editDestination}/>
        <ToggleButton text="Search" onClick={toggleSubmitted}/>
      </form>
    </div>
  </div>
);

export default HomePage;
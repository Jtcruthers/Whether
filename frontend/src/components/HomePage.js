import React from 'react';
import FormInput from './FormInput';
import ToggleButton from '../components/ToggleButton';

const HomePage = ({toggleSubmitted, editOrigin, editDestination}) => (
  <div className="HomePage">
    <div className="MainSearchDiv">
      <form>
        <FormInput title="Origin" onChange={editOrigin}/>
        <FormInput title="Destination" onChange={editDestination}/>
        <ToggleButton text="Search" onClick={toggleSubmitted}/>
      </form>
    </div>
  </div>
);

export default HomePage;
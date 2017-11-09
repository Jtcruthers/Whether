import React from 'react'

const ToggleButton = ({text, onClick}) => (
  <div className="ToggleButton" style={{"paddingTop": "10px"}}>
    <button className="pure-button" type="submit" onClick={onClick}>
      {text}
    </button>
  </div>
);

export default ToggleButton;
import React from 'react';

const ToggleButton = ({text, onClick}) => (
  <div className="ToggleButton">
    <button type="submit" onClick={onClick}>
      {text}
    </button>
  </div>
);

export default ToggleButton;
import React, { Component } from 'react';

import './css/HandlerButton.css';

class HandlerButton extends Component {
  render() {
      return ( <button className="HandlerButton" onClick={this.props.handler}/>
    );
  }
}

export default HandlerButton;

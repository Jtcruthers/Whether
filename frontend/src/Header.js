import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
     <div className="Header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Whether</h2>
    </div>
    );
  }
}

export default Header;

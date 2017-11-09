import React from 'react';
import logo from '../logo.svg';
import styles from '../css/Header.css'

const Header = () => (
      <div className="topnav">
              <a className="active" href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <span>Whether</span>
      </div>
);

export default Header;

import React from 'react';
import styles from '../css/Header.css'
import {Link} from 'react-router-dom'

const Header = () => (
      <div className="topnav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/">Services</Link>
              <span>Whether</span>
      </div>
);

export default Header;

import React, { Component } from 'react';
import './index.css';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
        <header className="header-container">
          <img src={logo} className="logo" alt="logo" />
          <a
            className="link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    );
  }
}

export default Header;

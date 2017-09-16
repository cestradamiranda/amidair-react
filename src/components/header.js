import React, { Component } from 'react';
import logo from './Amidair_logo_small.png';
import './header.css';
import SunriseSunset from '../services/sunriseSunset';

class Header extends Component {
 
  render() {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" onClick={this.handleClick}/>
        <SunriseSunset/>        
        </div>
      );
  }
    
  handleClick() {
    document.location.href = "/";
  }
  
}

export default Header;
import React, { Component } from 'react';
import logo from './Amidair_logo_small.png';
import './header.css';
import SunriseSunset from '../services/sunriseSunset';

class Header extends Component {
 
  render() {
    return (
        
           
        <SunriseSunset/>        
       
      );
  }
    
  handleClick() {
    document.location.href = "/";
  }
  
}

export default Header;
import React, { Component } from 'react';
import logo from './Amidair_logo_small.png';
import './header.css';
import SunriseSunset from '../services/sunriseSunset';
import AmidairNavBar from './amidairNavBar';
class Header extends Component {
 
  render() {
    return (
        
      <div>
        <AmidairNavBar />
        <SunriseSunset/> 
      </div>
             
       
      );
  }
    
  handleClick() {
    document.location.href = "/";
  }
  
}

export default Header;
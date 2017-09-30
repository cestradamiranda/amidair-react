import React, { Component } from 'react';
import logo from './Amidair_logo_small.png';

import SunriseSunset from '../services/sunriseSunset';

class Header extends Component {
 
  render() {
    return (
        
      <div >
        
        <SunriseSunset/> 
      </div>
             
       
      );
  }
    
  handleClick() {
    document.location.href = "/";
  }
  
}

export default Header;
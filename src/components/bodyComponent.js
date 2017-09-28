import React, { Component } from 'react';
 import Executif from './executif.js';

class BodyComponent extends Component {
  constructor() {
    super();
    this.state = {
      childVisible: false
    }
  }
  render() {
    return (
      <div>
        {
          this.state.childVisible
            ? <Executif />
            : null
        }
      </div>
     
        
       
      );
  }
    
 
  
}

export default BodyComponent;
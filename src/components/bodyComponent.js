import React, { Component } from 'react';
 import Executif from './executif.js';

class BodyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExecutif: this.props.show
       }
  }
  render() {
    return (

      <div>
     
         <Executif show={this.state.showExecutif}/>
     
      </div>
     
        
       
      );
  }
    
 
  
}

export default BodyComponent;
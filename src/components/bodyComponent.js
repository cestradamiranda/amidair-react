import React, { Component } from 'react';
 import Executif from './executif.js';

class BodyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExecutif: true,
      newShow: this.props.show
    }
  }
  render() {
    return (

      <div>
     
         <Executif show={this.state.newShow}/>
     
      </div>
     
        
       
      );
  }
    
 
  
}

export default BodyComponent;
import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'
 
import logo from './Amidair_logo_small.png';
import './header.css';
import AmidairNavBar from './amidairNavBar';

class Jumbo extends Component {
    render() {
        return (
            <Jumbotron>
                <AmidairNavBar />
                <div >
                    <img src={logo} className="App-logo" alt="logo" onClick={this.handleClick} />

                </div>

            </Jumbotron>
        );
    }

    handleClick() {
        document.location.href = "/";
      }
  }
  export default Jumbo;
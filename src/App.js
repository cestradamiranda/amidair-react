import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';
import Header from './components/header';
import Jumbo from './components/jumbotron';
import BodyComponent from './components/bodyComponent';

class App extends Component {
  render() {
    return (
      <div className="container">
         
        <Jumbo/>
        <Header/>
         
        <BodyComponent/>
      
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';
import {Button} from 'primereact/components/button/Button';
import Header from './components/header';
import AmidairNavBar from './components/amidairNavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header/>
        <AmidairNavBar/>

        <p className="App-intro">
          To get started, edit your code <code>src/App.js</code> and save to reload.
        </p>


        <Button label="Click" />
      </div>
    );
  }
}

export default App;

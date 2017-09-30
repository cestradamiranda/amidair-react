import React, { Component } from 'react';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';
import Jumbo from './components/jumbotron';
import BodyComponent from './components/bodyComponent';
import AmidairNavBar from './components/amidairNavBar';
class App extends Component {
  render() {
    return (
 
      <div className="container">

        <header>
          <Jumbo />
          <AmidairNavBar />
        </header>

        <main>
          <BodyComponent show={true}/>
        </main>

        <footer>I'm a 30px tall footer</footer>

      </div>
    );
  }
}

export default App;

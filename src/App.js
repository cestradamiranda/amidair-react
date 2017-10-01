import React, { Component } from 'react';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';
import Jumbo from './components/jumbotron';
import BodyComponent from './components/bodyComponent';
import AmidairNavBar from './components/amidairNavBar';
import Footer from './components/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showBodyExecutif: false};
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow=(show) => {
    this.setState({showBodyExecutif: show});
}


  render() {
    return (
 
      <div className="container">

        <header>
          <Jumbo />
          <AmidairNavBar  onSelectMenuItem={this.handleShow}/>
        </header>

        <main>
          {
            this.state.showBodyExecutif ?
              <BodyComponent show={this.state.showBodyExecutif} /> :
              null

          }
       
        </main>

       <footer>
         <Footer/>  
       </footer>
       
       

      </div>
    );
  }
}

export default App;

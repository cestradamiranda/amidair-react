import React, { Component } from 'react';
import { Navbar, Nav,NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './amidairNavBar.css';

class AmidairNavBar extends Component {
   constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    
  }
 
  render() {
    return (
     
        <div className="App-navbar">
           
        <Navbar>
          <Navbar.Header className="Test">
            <Navbar.Brand>
              <a href="#" onClick={this.handleClick}>AMIDAIR {this.state.isToggleOn ? 'Logued Off' : 'Carlos Logued On'}</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/">Accueil</NavItem>
            <NavDropdown eventKey={2} title="Nous Joindre" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}>Executif</MenuItem>
              <MenuItem eventKey={2.2}>Formulaires</MenuItem>
              <MenuItem eventKey={2.3}>Terrain</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Membres" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Administration</MenuItem>
              <MenuItem eventKey={3.2}>Annonces Classees</MenuItem>
              <MenuItem eventKey={3.3}>Formation</MenuItem>
              <MenuItem eventKey={3.4}>Instructeurs</MenuItem>
              <MenuItem eventKey={3.5}>Liste de Membres</MenuItem>
              <MenuItem eventKey={3.6}>Reglements</MenuItem>
              <MenuItem eventKey={3.7}>Section Imac</MenuItem>
              <MenuItem eventKey={3.8}>Trucs et Astuces</MenuItem>
            </NavDropdown>
            <NavItem eventKey={4} href="#">Multimedia</NavItem>
          </Nav>
        </Navbar>
        </div>
      );
  }
  
}

export default AmidairNavBar;
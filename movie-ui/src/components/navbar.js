import React, { Component } from "react";
import NavDropdown from 'react-navbar/dist/Dropdown';
import MenuItems from "react-navbar/dist/MenuItems";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({collapsed: !this.state.collapsed})
  };

  render() {
    return (
      <div>
        

        <nav className="navbar navbar-dark bg-dark">
        <div>
          <img src={require("../img/movie-ui.png")} alt="logo" />
          <span>Movie Database</span>
        </div>

      
        <Navbar>
          <NavbarToggler onClick={this.toggleNavbar}/>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://developers.themoviedb.org/3/search/search-movies">Movie Api</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/lindgrenarto/movie-ui">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

  
      </nav>



      
        
      </div>
    );
  }
}

export default NavBar;

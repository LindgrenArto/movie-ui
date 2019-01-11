import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <div>
        <Navbar className="navbar navbar-dark bg-dark">
          <NavbarToggler
            onClick={this.toggleNavbar}
            className="navbar navbar-dark bg-dark"
          />
          <div>
          <img src={require("../img/movie-ui.png")} alt="logo" />
          <span>Movie Database</span>
          </div>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://developers.themoviedb.org/3/search/search-movies">
                  The Movie Database API
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/lindgrenarto/movie-ui">
                  {" "}
                  App in GitHub
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/info">
                  About the App
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

import React, { Component } from "react";

import { Navbar } from "reactstrap";

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
          <div>
            <img src={require("../img/movie-ui.png")} alt="logo" />
            <span>Movie Database</span>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

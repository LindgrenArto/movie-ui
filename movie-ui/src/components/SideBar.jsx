import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";

class SideBar extends Component {
  state = {};

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <a
          id="api"
          className="menu-item"
          href="https://developers.themoviedb.org/3/search/search-movies"
        >
          The Movie Database Api
        </a>
        <a
          id="repo"
          className="menu-item"
          href="https://github.com/lindgrenarto/movie-ui"
        >
          App in Github
        </a>
        <a id="about" className="menu-item" href="/info">
          About the App
        </a>
      </Menu>
    );
  }
}

export default SideBar;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import MovieList from "./components/movie-list";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MovieList></MovieList>
        <main className="container" />
      </React.Fragment>
      
    );
  }
}

export default App;

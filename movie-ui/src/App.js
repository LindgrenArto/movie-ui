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
        <main className="container" >
        <MovieList></MovieList></main>
      </React.Fragment>
      
    );
  }
}

export default App;

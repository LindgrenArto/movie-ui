import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import MovieList from "./components/MovieList";
import Index from "./components/ScrollToTop";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <MovieList />
          <Index/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

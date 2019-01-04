import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container" />
      </React.Fragment>
    );
  }
}

export default App;

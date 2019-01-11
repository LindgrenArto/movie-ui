import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import MovieList from "./components/MovieList";
import Index from "./components/ScrollToTop";
<<<<<<< HEAD
import { BrowserRouter, Route } from "react-router-dom";
import InfoComponent from "./components/InfoComponent";
=======
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InfoComponent from "./components/InfoComponent";
import MovieRow from "./components/MovieRow";
>>>>>>> 895f1ea86d22f189ed3ada147552abf81e98fb1c

class App extends Component {
  render() {
    return (
      <BrowserRouter>
<<<<<<< HEAD
        <div>
=======
        <Switch>
>>>>>>> 895f1ea86d22f189ed3ada147552abf81e98fb1c
          <Route path="/info" component={InfoComponent} />
          <Route
            path="/"
            render={props => (
              <div>
                <React.Fragment>
                  <NavBar />
                  <main className="container">
                    <MovieList />
                    <Index />
                  </main>
                </React.Fragment>
              </div>
            )}
            exact
          />
<<<<<<< HEAD
        </div>
=======
</Switch>
>>>>>>> 895f1ea86d22f189ed3ada147552abf81e98fb1c
      </BrowserRouter>
    );
  }
}

export default App;

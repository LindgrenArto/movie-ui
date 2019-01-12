import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import MovieList from "./components/MovieList";
import Index from "./components/ScrollToTop";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InfoComponent from "./components/InfoComponent";
import MovieRow from "./components/MovieRow";
import SideBar from "./components/SideBar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/info" component={InfoComponent} />
          <Route
            path="/"
            render={props => (
              <div>
                <SideBar />
                <React.Fragment>
                  <NavBar />
                  <main className="container">
                    <MovieList />
                    <Index />
                  </main>
                </React.Fragment>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

import React from "react";

class InfoComponent extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className="navbar navbar-dark bg-dark">
          <div>
            <img src={require("../img/movie-ui.png")} alt="logo" />
            <span>Movie Database</span>
          </div>
        </div>
        <div className="container">
          <div className="card-style">
            <div
              className="card-info mb-4 shadow-sm"
            >
              <h1 className="header">Movie Database Info</h1>
              <p className="paragraph">
                <b>
                  This app was built in CodeCamp hosted by LUT University in
                  1/2019. The developers are Antti Karjalainen, Pekka Makkonen,
                  Arto Lindgren, Tuomas Käyhty and Jani Niculescu
                </b>
              </p>
              <div className="button-style">
                <a
                  href="http://localhost:3000"
                  type="button"
                  className="btn btn-primary"
                >
                  Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoComponent;

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
          <div className="col-sm-8 mx-auto">
            <div
              className="card mb-4 shadow-sm"
              style={{ height: 600, width: 600, padding: 10 }}
            >
              <h1 style={{ marginTop: 30 }}>Movie Database Info</h1>
              <p style={{ marginTop: 100, padding: 20, textAlign:"center" }}>
                <b>
                  This app was built in CodeCamp hosted by LUT University in
                  1/2019. The developers are Antti Karjalainen, Pekka Makkonen,
                  Arto Lindgren, Tuomas Käyhty and Jani Niculescu
                </b>
              </p>
              <div className="button-style">
                <a
                  href="http://localhost:3000"
                  className="info-button"
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

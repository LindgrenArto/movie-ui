import React from "react";
import {Button} from 'react-bootstrap'


class MovieRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.viewMovie = this.viewMovie.bind(this);
  }

  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <div className="container">
        <div className="col-sm-4" style={{ float: "left" }}>
          <div
            className="card mb-4 shadow-sm"
            style={{ height: 1000, width: 350, padding: 10 }}

          >
        
            <img alt="poster"  width="100%" src={this.props.movie.poster_src} />
            <h3><center>{this.props.movie.title}</center></h3>
            <div className="card-body">
              <p style={{ fontSize: 20 }} className="card-text">
                {this.props.movie.overview.substring(0,290)}...
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="btn-group"
                  style={{
                    bottom: 20,
                    position: "absolute",
                    verticalAlign: "middle"
                  }}
                >

                
                  <button
                    type="button"
                    onClick={this.viewMovie}
                    value="View"
                    className="button"
                  >
                    View
                  </button >

                  <b
                    style={{
                      marginLeft: 100,
                      fontSize: 25,
                      marginTop: 10
                    }}
                  >
                    {this.props.movie.vote_average}/10
                  </b>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieRow;

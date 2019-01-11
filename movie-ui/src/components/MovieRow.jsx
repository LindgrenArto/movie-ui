import React from "react";

class MovieRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.viewMovie = this.viewMovie.bind(this);
  }

  viewMovie() {
    const url =
      "https://www.themoviedb.org/" +
      this.props.movie.media_type +
      "/" +
      this.props.movie.id;
    window.location.href = url;
    console.log(this.props.movie.media_type);
  }

  fixSubstring = () => {
    if (this.props.movie.overview) {
      return <div>{this.props.movie.overview.substring(0, 300)}</div>;
    } else {
      return <div>No info for this article...</div>;
    }
  };

  fixPoster = () => {
    if (this.props.movie.poster_path) {
      return (
        <img alt="poster" width="100%" src={this.props.movie.poster_src} />
      );
    }

    if (this.props.movie.profile_path) {
      const path =
        "https://image.tmdb.org/t/p/w500" + this.props.movie.profile_path;
      return (
        <div>
          <img alt="poster" width="100%" src={path} />
        </div>
      );
    } else {
      return <div>no poster found..</div>;
    }
  };

  render() {
    return (
      <div className="container" style={{ alignContent: "center" }}>
        <div className="col-xs-4" style={{ float: "left" }}>
          <div className="card mb-4 shadow-sm">
            <div>{this.fixPoster()}</div>
            <h3>
              <center>{this.props.movie.title}</center>
            </h3>

            <h3>
              <center>{this.props.movie.name}</center>
            </h3>
            <div className="card-body">
              <div style={{ fontSize: 15 }} className="card-text">
                {this.fixSubstring()}
              </div>

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
                  </button>

                  <b className="b-style">{this.props.movie.vote_average}/10</b>
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

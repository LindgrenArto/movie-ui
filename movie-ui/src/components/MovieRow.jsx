import React from "react";

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
<<<<<<< HEAD
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img alt="poster" width="330" src={this.props.movie.poster_src} />
=======
        <div className="col-sm-4" style={{ float: "left" }}>
          <div
            className="card mb-4 shadow-sm"
            style={{ height: 1100, width: 350, margin: 20 }}
          >
            <img alt="poster" width="100%" src={this.props.movie.poster_src} />
>>>>>>> 461f0fe21acb48b77aebcab10408ee7874f478b5
            <h3>{this.props.movie.title}</h3>
            <div className="card-body">
              <p style={{ fontSize: 20 }} className="card-text">
                {this.props.movie.overview}.
              </p>
              <div className="d-flex justify-content-between align-items-center">
<<<<<<< HEAD
                <div className="btn-group">
=======
                <div
                  className="btn-group"
                  style={{
                    bottom: 20,
                    position: "absolute",
                    verticalAlign: "middle"
                  }}
                >
>>>>>>> 461f0fe21acb48b77aebcab10408ee7874f478b5
                  <button
                    type="button"
                    onClick={this.viewMovie}
                    value="View"
                    className="button"
                  >
                    View
                  </button>
<<<<<<< HEAD
                  <b style={{ marginLeft: 150, fontSize: 25, marginTop: 15 }}>
=======
                  <b
                    style={{
                      marginLeft: 100,
                      fontSize: 25,
                      marginBottom: 10
                    }}
                  >
>>>>>>> 461f0fe21acb48b77aebcab10408ee7874f478b5
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
/*</div>
      <table key={this.props.movie.id} className="table">
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="150" src={this.props.movie.poster_src} />
            </td>
            <td>
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <b>
                <p> {this.props.movie.vote_average}/10</p>
              </b>
              <input
                type="button"
                onClick={this.viewMovie.bind(this)}
                value="View"
                className="button"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
*/

export default MovieRow;

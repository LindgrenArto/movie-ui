import React from "react";

class MovieRow extends React.Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
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

export default MovieRow;

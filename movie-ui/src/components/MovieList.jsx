import React, { Component } from "react";
import $ from "jquery";
class MovieList extends Component {
  constructor(props) {
    super(props);
    this.performSearch();

    this.state = {
      row: [<p key="1">Row 1</p>, <p key="2">Row 1</p>, <p key="3">Row 1</p>]
    };

    const movies = [
      {
        id: 0,
        poster_src:
          "https://image.tmdb.org/t/p/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
        title: "avengers",
        overview: "Aasdasd"
      },
      {
        id: 2,
        poster_src:
          "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
        title: "avs",
        overview: "Aasdasd"
      }
    ];

    const movieRows = [];
    movies.forEach(movie => {
      console.log(movie.title);
      const movieRow = (
        <table key={movie.id}>
          <tbody>
            <tr>
              <td>
                <img src={movies.poster_src} width="120" alt="poster" />
              </td>
              <td>{movie.title}</td>
              <p>{movie.overview}</p>
            </tr>
          </tbody>
        </table>
      );
      movieRows.push(movieRow);
    });

    this.state = { row: movieRows };
  }

  performSearch() {
    console.log("Search applied");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?query=marvel&api_key=068d49b266bf94644819ae580f3ec131";

    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("Fetch toimii");
        console.log(searchResults);
        const results = searchResults.results;
        console.log(results[0]);
      },
      error: (xhr, status, err) => {
        console.log(" haku ei toimi");
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        <input type="text" placeholder="Search" className="movie-input" />

        {this.state.row}
      </React.Fragment>
    );
  }
}

export default MovieList;

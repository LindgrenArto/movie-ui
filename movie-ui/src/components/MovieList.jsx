import React, { Component } from "react";
import $ from "jquery";
import MovieRow from "./MovieRow";
class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
    this.performSearch = this.performSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    
  }
  componentDidMount() {
    this.performSearch("A");
  }
//api key:  1b5adf76a72a13bad99b8fc0c68cb085
  performSearch(searchTerm) {
    const urlString =
      "https://api.themoviedb.org/3/search/multi?api_key=1b5adf76a72a13bad99b8fc0c68cb085&language=en-US&query="  +
      searchTerm;
    $.ajax({
      url: urlString,
      success: searchResults => {
        const results = searchResults.results;

        var movieRows = [];

        results.forEach(movie => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w500" + movie.poster_path;

          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        this.performSearch("die");
      }
    });
  }

  handleSearch(event) {
    const search = event.target.value;
    this.setState({ filter: search });

    this.performSearch(search);
  }

  render() {
    return (
      <React.Fragment>
        <input
          value={this.state.filter}
          type="text"
          placeholder="Search for movies and tv-series.."
          className="movie-input"
          onChange={this.handleSearch}
        />

        {this.state.rows}
      </React.Fragment>
    );
  }
}

export default MovieList;

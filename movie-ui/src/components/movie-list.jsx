import React, { Component } from 'react';
import $ from 'jquery'
class MovieList  extends Component {
constructor(props) {
    super(props)
    this.performSearch()



}
    state = {  }


    performSearch() {
        console.log('Search applied')
        const urlString = "https://api.themoviedb.org/3/search/movie?api_key=068d49b266bf94644819ae580f3ec131&language=en-US&query=avengers&page=1&include_adult=false"

        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log('Fetch toimii')
                console.log(searchResults)
                const results = searchResults.results
                console.log(results[0])
                
            },
            error: (xhr, status, err) => {
                console.log(' haku ei toimi')

            }
        });
    }
    render() {
        
        
        
        return (
            <h1>Hasas</h1>
          );
    }
}
 
export default MovieList ;
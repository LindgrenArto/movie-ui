import React from 'react';

class InfoComponent  extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                
            <div className="navbar navbar-dark bg-dark">

            <div>
          <img src={require("../img/movie-ui.png")} alt="logo" />
          <span>Movie Database</span>
          </div>
            </div>
            <h1>Sovelluksesta</h1>
            <p><b>
            This app was built in CodeCamp hosted by LUT University in 1/2019.
            The developers are Antti Karjalainen, Pekka Makkonen, Arto Lindgren, Tuomas Käyhty, Jani Niculescu
            </b></p>
            <a href="http://localhost:3000">Back</a>
            </div>           
         );
    }
}
 
export default InfoComponent
import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Link} from 'react-router-dom';

import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';

class App extends Component {

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router >
        <ul>
            <li>
              <Link to="/movies">SHOW LIST</Link>
            </li>
            <li>
              <Link to="/detail">MOVIE DETAIL</Link>
            </li>
          </ul>
          <Route exact path='/movies' component={MovieList}/>
          <Route exact path='/detail' component={MovieDetails}/>
          </Router>
      </div>
    )}
}


export default App;

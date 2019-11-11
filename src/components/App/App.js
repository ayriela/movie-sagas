import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route} from 'react-router-dom';

import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';

class App extends Component {

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router >
          <Route exact path='/' component={MovieList}/>
          <Route exact path='/detail/:id' component={MovieDetails}/>
          </Router>
      </div>
    )}
}


export default App;

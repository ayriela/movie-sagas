import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem'
import {connect} from 'react-redux';



class MovieList extends Component {
    componentDidMount(){
        this.props.dispatch({type:'FETCH_MOVIES'});
        this.props.dispatch({type:'FETCH_GENRE'});
    }

  render() {
    return (
      <div className="flex-container">
        {this.props.movies.map((movie) => <MovieItem movie={movie} key={movie.id}/>)}
      </div>
    )
  }
}
const mapReduxStateToProps=(reduxState)=>{
    return reduxState;
}
export default connect(mapReduxStateToProps)(MovieList);

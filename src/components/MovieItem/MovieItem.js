import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Typography } from "@material-ui/core";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieItem extends Component {
    state = {
        dispImage: true,
    }
    getDetails=()=>{
       //console.log('get details clicked');
       this.props.history.push(`/detail/`);
       this.props.dispatch({type: 'FETCH_DETAIL', payload: this.props.movie.id});
    }
  render() {
    return (
      <Card className="flex-item">
      <CardActionArea onClick={this.getDetails}>
           <Typography className="movie-title">{this.props.movie.title}</Typography>
        <img src={this.props.movie.poster} alt={this.props.movie.title} className="movie-poster"></img>
      </CardActionArea>
    </Card>
    );
  }
}

export default connect()(withRouter(MovieItem));

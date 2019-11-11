import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardHeader } from '@material-ui/core';
import CardActions from "@material-ui/core/CardActions";
import { Typography } from "@material-ui/core";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieItem extends Component {
    state = {
        dispImage: true,
    }
    getDetails=()=>{
       console.log('get details clicked');
       this.props.history.push(`/detail/${this.props.movie.id}`);
       this.props.dispatch({type: 'FETCH_DETAIL', payload: this.props.movie.id});
    }
  render() {
    return (
      <Card className="flex-item">
      <CardActionArea onClick={this.getDetails}>
           <Typography className="movie-title">{this.props.movie.title}</Typography>
        <img src={this.props.movie.poster} alt={this.props.movie.title} className="movie-poster"></img>
  {/*       <div className="description">
            <Typography className="movie-description">{this.props.movie.description}</Typography>
        </div>
        <Typography className="genreDispaly">Genres Eventually</Typography> */}
      </CardActionArea>
    </Card>
    );
  }
}

export default connect()(withRouter(MovieItem));

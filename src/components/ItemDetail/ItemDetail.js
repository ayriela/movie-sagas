import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardHeader } from '@material-ui/core';
import CardActions from "@material-ui/core/CardActions";
import { Typography } from "@material-ui/core";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class ItemDetail extends Component {
  render() {
    return (
        <div className="allDetail">
        <img src={this.props.detail.poster} alt={this.props.detail.title} className="detail-poster"/>
        <div className="detail">
        <h3 className="detail-label">Description: </h3>
        <Typography className="detail-info">{this.props.detail.description}</Typography>
        <h3 className="detail-label">Genres:</h3>
        <ul className="detail-info">
            {this.props.detail.genres&&this.props.detail.genres.map(genre=><li key={genre}>{genre}</li>)}
        </ul>
        </div>
        </div>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
    return reduxState;
}

export default connect(mapReduxStateToProps)(withRouter(ItemDetail));

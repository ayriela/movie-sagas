import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardHeader } from '@material-ui/core';
import CardActions from "@material-ui/core/CardActions";
import { Typography } from "@material-ui/core";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class ItemEdit extends Component {
  render() {
    return (
        <div className="detail">
            <h2>EDIT THIS</h2>
        <img src={this.props.detail.poster} alt={this.props.detail.title} className="detail-poster"/>
        <h3 className="detail-label">Description: </h3>
        <p className="detail-description"></p>
        <h3 className="detail-label">Genres:</h3>
        <ul className="detail-genres">
            {this.props.detail.genres&&this.props.detail.genres.map(genre=><li>{genre}</li>)}
        </ul>
        </div>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
    return reduxState;
}

export default connect(mapReduxStateToProps)(withRouter(ItemEdit));

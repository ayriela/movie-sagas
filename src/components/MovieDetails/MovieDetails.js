import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardHeader } from '@material-ui/core';
import CardActions from "@material-ui/core/CardActions";
import { Typography } from "@material-ui/core";
import {connect} from 'react-redux';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemEdit from '../ItemEdit/ItemEdit';


class MovieItem extends Component {
    state={
        disp: true,
    }
    toggleDisplay=()=>{
        this.setState({
            disp: !this.state.disp,
        })
    }
    componentDidMount(){
        //this.props.dispatch({type: 'FETCH_DETAIL', payload: this.props.detail.id});
    }

 /*    getDetails=()=>{
       console.log('get details clicked');
       this.props.dispatch({type: 'FETCH_DETAIL', payload: this.props.movie.id});
    } */
  render() {
    return (
        <>
        <h1 className="header">{this.props.detail.title}</h1>
        <Button onClick={this.toggleDisplay} variant="contained" color="primary" className="right">Edit Movie Details</Button>
        {this.state.disp?<ItemDetail />:<ItemEdit />}
        {JSON.stringify(this.props.detail, null,2)}
      
        </>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
    return reduxState;
}
export default connect(mapReduxStateToProps)(MovieItem);

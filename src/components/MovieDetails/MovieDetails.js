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

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class MovieItem extends Component {
    state={
        disp: true,
        dialog: false,
    }
    toggleDisplay=()=>{
        this.setState({
            disp: !this.state.disp,
        })
    }

    openDialog=()=>{
        this.setState({
            dialog: true,
        });
    }
    //function to close dialog if user opts to stay on page cancel will be true
    closeDialog=(cancel)=>{
        if (cancel){
            this.setState({
                dialog: false,
            });
        } else{
            this.setState({
                dialog: false,
            });
            this.toggleDisplay();
        }
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
        <div className="detailActions">
        <Button onClick={()=>this.props.history.push('/movies')} variant="outlined" color="primary" className="left">Back to List</Button>
        {this.state.disp?
        <Button onClick={this.toggleDisplay} variant="contained" color="primary" className="right">Edit Movie Details</Button>
        :<Button onClick={this.openDialog} variant="contained" color="primary" className="right">Back to Movie Details</Button>}
        </div>
        <div className="detailAll" display="block">
        {this.state.disp?<ItemDetail />:<ItemEdit />}
        </div>
         {/*Dialog Hit on Return To Details */}
         <Dialog
                
                open={this.state.dialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to return to the detail page?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                         Any changes that have not been submitted will be lost.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>this.closeDialog(false)} variant="contained" color="primary">
                        Yes, my changes have been saved.  </Button>
                    <Button onClick={()=>this.closeDialog(true)} variant="contained" color="primary">
                        No, I would like to continue editing the details.</Button>
                </DialogActions>
            </Dialog>
      
        </>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
    return reduxState;
}
export default connect(mapReduxStateToProps)(MovieItem);

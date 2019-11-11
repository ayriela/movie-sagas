import React, { Component } from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import ItemDetail from '../ItemDetail/ItemDetail';
import ItemEdit from '../ItemEdit/ItemEdit';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';


{/* class MovieItem extends Component {
    state={
        disp: true,
        dialog: false,
    }

    id = useParams();

    //flip shown component between edit and display
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

  render() {
    return (
        <>
        <h1 className="header">{this.props.detail.title}</h1>
        <div className="detailActions">
        <Button onClick={()=>this.props.history.push('/movies')} variant="outlined" color="primary" className="left">Back to List</Button>
        {/*toggle navigation button edit or display 
        {this.state.disp?
        <Button onClick={this.toggleDisplay} variant="contained" color="primary" className="right">Edit Movie Details</Button>
        :<Button onClick={this.openDialog} variant="contained" color="primary" className="right">Back to Movie Details</Button>}
        </div>
        <div className="detailAll" display="block">
        {/*toggle component displayed
        {this.state.disp?<ItemDetail />:<ItemEdit />}
        </div>
         {/*Dialog Hit on Return To Details
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
} */}


//function component
function  MovieItem (props) {
    //set state toggles
    const [disp, setDisp] = useState(true);
    const [dialog, setDialog] = useState(false);
   
     //grab id from path
     let {id} = useParams();

    //run data fetch on load
    useEffect(() => runOnLoad(), []);

    async function runOnLoad(){
        console.log('in run on load');
        props.dispatch({type: 'FETCH_DETAIL', payload: id});
        props.dispatch({type:'FETCH_GENRE'});
    }
    //run saga to update props
    //props.dispatch({type: 'FETCH_DETAIL', payload: id});

    //run saga to make sure genre list is up to date in edit display
    //props.dispatch({type:'FETCH_GENRE'});

    //flip shown component between edit and display
    const toggleDisplay=()=>{
        setDisp(!disp);
    }

    //function to open dialog box
    const openDialog=()=>{
      setDialog(true);
    }

    //function to close dialog if user opts to stay on page cancel will be true
    const closeDialog=(cancel)=>{
        if (cancel){
            setDialog(false);
        } else{
            setDialog(false);
            toggleDisplay();
        }
    }


    return (
        <>
        <h1 className="header">{props.detail.title}</h1>
        <div className="detailActions">
        <Button onClick={()=>props.history.push('/')} variant="outlined" color="primary" className="left">Back to List</Button>
        {/* toggle navigation button edit or display */}
        {disp?
        <Button onClick={toggleDisplay} variant="contained" color="primary" className="right">Edit Movie Details</Button>
        :<Button onClick={openDialog} variant="contained" color="primary" className="right">Back to Movie Details</Button>}
        </div>
        <div className="detailAll" display="block">
        {/*toggle component displayed */}
        {disp?<ItemDetail />:<ItemEdit />}
        </div>
         {/*Dialog Hit on Return To Details */}
         <Dialog
                
                open={dialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to return to the detail page?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                         Any changes that have not been submitted will be lost.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>closeDialog(false)} variant="contained" color="primary">
                        Yes, my changes have been saved.  </Button>
                    <Button onClick={()=>closeDialog(true)} variant="contained" color="primary">
                        No, I would like to continue editing the details.</Button>
                </DialogActions>
            </Dialog>
      
        </>
    );
}

const mapReduxStateToProps=(reduxState)=>{
    return reduxState;
}
export default withRouter(connect(mapReduxStateToProps)(MovieItem));

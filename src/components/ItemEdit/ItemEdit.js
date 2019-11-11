import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardHeader } from '@material-ui/core';
import CardActions from "@material-ui/core/CardActions";
import { Typography } from "@material-ui/core";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {TextField} from '@material-ui/core';
import {InputLabel,Select, MenuItem, FormControl} from '@material-ui/core';

class ItemEdit extends Component {
    state={
        title: this.props.detail.title,
        description: this.props.detail.description,
        genre:'',
    }
    setText=(event,property)=>{
        this.setState({
            [property]: event.target.value,
        })
    }

    genreChange=(event)=>{
        this.setState({
            genre: event.target.value,
        })
    }

    addGenre=()=>{
        const toSend={
            movieId: this.props.detail.id,
            genreId: this.state.genre,
        };
        this.props.dispatch({type: 'FETCH_NEW_GENRE', payload: toSend});
    }

    addText=()=>{
        const toSend={
            movieId: this.props.detail.id,
            title: this.state.title,
            description: this.state.description,
        }
        this.props.dispatch({type: 'FETCH_NEW_DETAIL', payload: toSend});
    }

  render() {
    return (
        <div className="allEdit">
        <img src={this.props.detail.poster} alt={this.props.detail.title} className="detail-poster"/>
        <div className="edit">
        <TextField
        id="outlined-static"
        label="Title"
        defaultValue={this.props.detail.title}
        onChange={(event)=>this.setText(event, 'title')}
        className="textField"
        margin="normal"
        variant="outlined"
        color="primary"
      />
      
        <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        defaultValue={this.props.detail.description}
        onChange={(event)=>this.setText(event, 'description')}
        className="textField"
        margin="normal"
        variant="outlined"
        fullWidth
        color="primary"
      />
        
      <div className="genreControls">
        {/* <FormControl variant="outlined" className="genre-list"> */}
         <InputLabel id="helper-label">Add a Genre:</InputLabel>
        <FormControl variant="outlined" style={{minWidth: 120}} className="genre-list">
        <Select
          labelid="helper-label"
          id="genre-select"
          value={this.state.genre}
          onChange={this.genreChange}
        > {this.props.genres.map(genre=><MenuItem value={genre.id} key={genre.id}>{genre.name}</MenuItem>)}
        </Select>
        </FormControl>
        <Button onClick={this.addGenre}
        color="primary"
        variant="contained"
        className="add">Add</Button>
        <Button className="title-description-update right" 
      onClick={this.addText}
      color="primary"
      variant="contained">Update Title/Description Text</Button>
        </div>
    </div>
    </div>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
    return reduxState;
}

export default connect(mapReduxStateToProps)(withRouter(ItemEdit));

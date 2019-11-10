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
import {InputLabel,Select, MenuItem} from '@material-ui/core';

class ItemEdit extends Component {
    state={
        description:'',
        genres:[],
    }
    setDescription=(event)=>{
        this.setState({
            description: event.target.value,
        })
    }

    genreChange=(event)=>{
        this.setState({
            genres: event.target.value,
        })
    }

    addGenre=()=>{

    }

  render() {
    return (
        <div className="allEdit">
        <img src={this.props.detail.poster} alt={this.props.detail.title} className="detail-poster"/>
        <div className="edit">
        <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        defaultValue={this.props.detail.description}
        onChange={this.setDescription}
        className="textField"
        margin="normal"
        variant="outlined"
        fullWidth
        color="primary"
      />
        
        
         <InputLabel id="helper-label">Add a Genre:</InputLabel>
        <Select
          labelid="helper-label"
          id="genre-select"
          value=''
          onChange={this.handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Button onClick={this.addGenre}>Add</Button>
    </div>
    </div>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
    return reduxState;
}

export default connect(mapReduxStateToProps)(withRouter(ItemEdit));

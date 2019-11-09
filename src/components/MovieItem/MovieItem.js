import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import { Typography } from "@material-ui/core";

class MovieItem extends Component {
    state = {
        dispImage: true,
    }
    toggleImage=()=>{
        this.setState({
            dispImage: !this.state.dispImage,
        })
    }
  render() {
    return (
      <Card className="flex-item">
          <Typography>{this.props.movie.title}</Typography>
      {/* <CardActionArea onClick={this.setImage}>
        {this.state.dispImage? 
        <img src={this.props.item.path} alt="broken" onClick={()=>{this.toggleImage(false)}}></img>:
        <div className="image-text" 
        onClick={this.toggleImage}>{this.props.item.description}</div>}
      </CardActionArea>
        <Typography>{this.props.item.likes} people love this!</Typography>
      <CardActions style={{justifyContent: 'center'}}>
        <Button onClick={()=>this.props.loveCount(this.props.item.id)} variant="contained" color="primary">Love This!</Button>
      </CardActions> */}
    </Card>
    );
  }
}

export default MovieItem;

import React, {Component} from 'react';
import './clickable.css'

class ClickablePicture extends React.Component {
 
  
  constructor(props) {
  

    super(props);
    this.state = {
      counter: 1,
      bgColor: green
    }
  }



  increment = () => {
    var letters = '0123456789ABCDEF';
    var colory = '#';
    for (var i = 0; i < 6; i++ ) {
    colory += letters[Math.floor(Math.random() * 16)];
    }

    this.setState({
      counter: this.state.counter + 1,
      bgColor: colory
    });
  }

    render() {

     
        return (
            <div>
               
            <button  style={{backgroundColor:this.state.bgColor}} className="LikeButton" onClick={()=> this.increment()}>{this.state.counter} Likes</button>
            </div>
        )
    }
}

export default ClickablePicture;

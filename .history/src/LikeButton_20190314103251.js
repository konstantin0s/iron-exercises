import React, {Component} from 'react';
import './like-button.css'

class LikeButton extends React.Component {
 
  
  constructor(props) {
    let green = '#39D1B4';
    let yellow = '#FFD712';

    super(props);
    this.state = {
      counter: 1,
      bgColor: green
    }
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

export default LikeButton;

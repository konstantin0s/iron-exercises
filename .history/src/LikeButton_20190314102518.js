import React, {Component} from 'react';
import './like-button.css'

class LikeButton extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      bgColor: 'red'
    }
  }

  

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
      bgColor: 'blue',
      bgColor: 'green'
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

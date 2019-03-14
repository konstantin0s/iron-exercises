import React, {Component} from 'react';
import './like-button.css'

class LikeButton extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
  }

 let bgColor  = {'purple','blue','green','yellow','orange','red'}
  
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

    render() {
        return (
            <div>
               
            <button className="LikeButton" onClick={()=> this.increment()}>{this.state.counter} Likes</button>
            </div>
        )
    }
}

export default LikeButton;

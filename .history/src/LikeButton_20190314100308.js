import React, {Component} from 'react';
import './like-button.css'

class LikeButton extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

    render() {

      let bgColor = {
        purple: 'purple',
        blue: 'blue',
        green: 'green',
        yellow: 'yellow',
      }
        return (
            <div>
               
            <button className="LikeButton" onClick={()=> this.increment()}>{this.state.counter} Likes</button>
            </div>
        )
    }
}

export default LikeButton;

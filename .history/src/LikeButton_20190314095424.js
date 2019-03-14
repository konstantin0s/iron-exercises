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
        return (
            <div className="LikeButton">
                  <h1>{this.state.counter}</h1>
            <button onClick={()=> this.increment()}>Like</button>
            </div>
        )
    }
}

export default LikeButton;

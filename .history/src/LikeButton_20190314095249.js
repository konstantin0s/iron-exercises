import React, {Component} from 'react';
import './like-button.css'

class LikeButton extends React.Component {
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

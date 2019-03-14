import React, {Component} from 'react';
import './clickable.css'

class ClickablePicture extends React.Component {
 
  
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
            <div>
               
            <button  style={{backgroundColor:this.state.bgColor}} className="LikeButton" onClick={()=> this.increment()}>{this.state.counter} Likes</button>
            </div>
        )
    }
}

export default ClickablePicture;

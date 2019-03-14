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

      let { r,g,b } = this.props
      let hex = '#'
        + ('0'+r.toString(16)).substr(-2)
        + ('0'+g.toString(16)).substr(-2)
        + ('0'+b.toString(16)).substr(-2)
      let color = 'white'
      if (r+g+b > 127*3) color = 'black'
      return (
        <div>
          rgb({r},{g},{b})<br/>
          <button className="BoxColor box" style={{
          backgroundColor: `rgb(${r},${g},${b})`,
          color: color,
        }}
          
           onClick={()=> this.increment()}>{this.state.counter} Likes</button>
          {hex}
        </div>
      );
        // return (
        //     <div>
               
        //  
        //     </div>
        // )
    }
}

export default LikeButton;

import React, { Component } from 'react';

class Increment extends React.Component {

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

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
 
    return (
      <div className="Facebook">

      </div>
    )
  }
}



export default Facebook;
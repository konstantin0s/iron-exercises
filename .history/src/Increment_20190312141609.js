import React, { Component } from 'react';

class Increment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
  }
   
  // reset = () => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  // }


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
      <div className="states">
            <h1>{this.state.counter}</h1>
            <button onClick={()=> this.increment()}>Increment</button>
            <button onClick={()=> this.decrement()}>Decrement</button>
      </div>
    )
  }
}



export default Increment;
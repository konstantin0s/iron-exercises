import React, { Component } from 'react';


class Random extends React.Component {
  render() {
    
    return (

    // min + (Math.random() * (max-min)
      <div className="Random">
        <ul>
        <li> {this.props.min} + (Math.random() * ({this.props.min} - {this.props.max}))</li>
        </ul>
      </div>
    )
  }
}



export default Random;
import React, { Component } from 'react';


class Random extends React.Component {
  render() {
    let randomValue = this.props.min + Math.floor(Math.random() * (this.props.max-this.props.min+1))
    return (
      <div className="Random">
        <ul>
        <li> Random values {this.props.min} {this.props.max} => {randomValue}</li>
        </ul>
      </div>
    )
  }
}



export default Random;
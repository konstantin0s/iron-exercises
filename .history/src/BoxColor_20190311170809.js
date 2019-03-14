import React, { Component } from 'react';


class BoxColor extends React.Component {
  render() {
    let randomValue = this.props.min + Math.floor(Math.random() * (this.props.max-this.props.min+1))
    return (
      <div className="Random">
        <ul>
        <li> Random values of {this.props.min} and {this.props.max} is => {randomValue}</li>
        </ul>
      </div>
    )
  }
}



export default BoxColor;
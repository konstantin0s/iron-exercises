import React, { Component } from 'react';


class BoxColor extends React.Component {
  render() {
    let randomValue = this.props.min + Math.floor(Math.random() * (this.props.max-this.props.min+1))
    return (
      <div className="Random">
        <ul>
        <li>r: {this.props.r}</li>
        <li>g: {this.props.g}</li>
       <li>b: {this.props.b}</li>
        </ul>
      </div>
    )
  }
}



export default BoxColor;
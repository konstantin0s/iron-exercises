import React, { Component } from 'react';


class BoxColor extends React.Component {
  render() {
 
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
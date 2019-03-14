import React, { Component } from 'react';


class Random extends React.Component {
  render() {
    return (
      <div className="Random">
        <ul>
        <li> {this.props.min} {this.props.max}</li>
        </ul>
      </div>
    )
  }
}



export default Greeting;
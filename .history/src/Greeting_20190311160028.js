import React, { Component } from 'react';


class Greeting extends React.Component {
  render() {
    return (
      <div className="Greeting">
        <ul>
        <li>English: {this.props.en}</li>
        </ul>
      </div>
    )
  }
}



export default Greeting;
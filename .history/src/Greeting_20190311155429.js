import React, { Component } from 'react';


class Greeting extends React.Component {
  render() {
    return (
      <div className="Greeting">
        <ul>
        <li>Name: {this.props.en}</li>
         <li>Lastname: {this.props.fr}</li>
        </ul>
      </div>
    )
  }
}



export default Greeting;
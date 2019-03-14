import React, { Component } from 'react';


class BoxColor extends React.Component {
  render() {
    let randomValue = this.props.min + Math.floor(Math.random() * (this.props.max-this.props.min+1))
    return (
      <div className="Random">
        <ul>
        <li>Name: {this.props.firstName}</li>
        <li>Lastname: {this.props.lastName}</li>
       <li>country: {this.props.country}</li
        </ul>
      </div>
    )
  }
}



export default BoxColor;
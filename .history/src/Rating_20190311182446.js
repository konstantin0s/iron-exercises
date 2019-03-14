import React, { Component } from 'react';


class Rating extends React.Component {
  render() {
    return (
      <div className="User">
      <ul>
      <li>Rating: {this.props.children}</li>
       </ul>
      </div>
    )
  }
}



export default Rating;

import React, { Component } from 'react';


class User extends React.Component {
  render() {
    return (
      <div className="User">
      <ul>
      <li>Name: {this.props.firstName}</li>
      <li>Lastname: {this.props.lastName}</li>
      <li>gender: {this.props.gender}</li>
      <li>height: {this.props.height}</li>
       <li>Image: {this.props.picture}</li>
       </ul>
      </div>
    )
  }
}



export default User;

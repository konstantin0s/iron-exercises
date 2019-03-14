import React, { Component } from 'react';


class User extends React.Component {
  render() {
    return (
      <div className="User">
      <li>Name: {this.props.firstName}</li>
      <li>Lastname: {this.props.lastName}</li>
      <li>gender: {this.props.gender}</li>
      <li>height: {this.props.height}</li>
       <li>{this.props.picture}</li>
      </div>
    )
  }
}



export default User;

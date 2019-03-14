import React, { Component } from 'react';


class User extends React.Component {
  render() {
    return (
      <div className="User">
      <li>Name: {this.props.firstName}</li>
      <li>Lastname: {this.props.lastName}</li>
      <li>gender: {this.props.gender}</li>
      <li>height: {this.props.height}</li>
      <li>birth: {this.props.birth}</li>
      </div>
    )
  }
}



export default User;

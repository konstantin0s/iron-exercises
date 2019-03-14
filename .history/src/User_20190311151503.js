import React, { Component } from 'react';


class User extends React.Component {
  render() {
    return (
      <div className="User">
      <li>Name: {this.props.firstName}</li>
      <li>Lastname: {this.props.lastName}</li>
      </div>
    )
  }
}



export default User;

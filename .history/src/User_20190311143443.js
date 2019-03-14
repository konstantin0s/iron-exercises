import React, { Component } from 'react';

class User extends React.Component {
  render() {
    return (
      <div className="User">
      <li>Name: {this.props.firstName}</li>
      </div>
    )
  }
}

class UsersList extends React.Component {
  render() {
    return (
      <div className="UsersList">
      <li>Name: {this.props.firstName}</li>
      </div>
    )
  }
}



export default User;

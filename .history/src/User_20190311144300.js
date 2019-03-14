import React, { Component } from 'react';
 import { UserLists } from './UsersList';

class User extends React.Component {
  render() {
    return (
      <div className="User">
      <li>Name: {this.props.users.firstName}</li>
      </div>
    )
  }
}



export default User;

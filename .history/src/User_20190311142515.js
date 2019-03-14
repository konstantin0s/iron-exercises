import React, { Component } from 'react';

// import { UsersList } from './UsersList';

class User extends React.Component {
  render() {
    return (
      <div className="User">
      <li>Name: {this.props.firstName}</li>
      </div>
    )
  }
}

export default User;
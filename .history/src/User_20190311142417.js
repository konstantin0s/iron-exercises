import React, { Component } from 'react';

// import { UsersList } from './UsersList';

export class User extends React.Component {
  render() {
    return (
      <div>
      <li>Name: {this.props.firstName}</li>
      </div>
    )
  }
}

import React, { Component } from 'react';
/

export class User extends React.Component {
  render() {
    return (
      <div>
      <li>Name: {this.props.firstName}</li>
      </div>
    )
  }
}

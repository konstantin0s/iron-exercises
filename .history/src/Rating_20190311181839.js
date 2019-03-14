import React, { Component } from 'react';


class User extends React.Component {
  render() {
    return (
      <div className="User">
      <ul>
      <li>Name: {this.props.firstName}</li>
       </ul>
      </div>
    )
  }
}



export default User;

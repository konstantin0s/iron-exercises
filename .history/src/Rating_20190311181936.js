import React, { Component } from 'react';


class User extends React.Component {
  render() {
    return (
      <div className="User">
      <ul>
      <li>Name: {this.props.children}</li>
       </ul>
      </div>
    )
  }
}



export default User;

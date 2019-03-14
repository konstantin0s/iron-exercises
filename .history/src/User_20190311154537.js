import React, { Component } from 'react';


class User extends React.Component {
  render() {
    return (
      <div className="User">
      <ul>
      <li>Name: {this.props.firstName}</li>
      <li>Lastname: {this.props.lastName}</li>
      <li>country: {this.props.country}</li>
       <li>Image: <img src="{this.props.img}" /></li>
       </ul>
      </div>
    )
  }
}



export default User;

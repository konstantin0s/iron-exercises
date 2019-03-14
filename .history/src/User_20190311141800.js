import React from 'react'
import { UsersList } from './UsersList';

export default function User() {
  render() {
    return (
      <div>
      <li>Name: {this.props.firstName}</li>
      </div>
    )
  }
}

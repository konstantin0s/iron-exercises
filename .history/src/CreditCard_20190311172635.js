import React, { Component } from 'react';


class CreditCard extends React.Component {
  render() {
  
    return (
      <div className="Random">
        <ul>
        <li>Type: {this.props.type}</li>
        <li>Type: {this.props.number}</li>
        <li>Type: {this.props.expirationMonth}</li>
        <li>Type: {this.props.expirationYear}</li>
        <li>Type: {this.props.bank}</li>
        <li>Type: {this.props.owner}</li>
        <li>Type: {this.props.bgColor}</li>
        <li>Type: {this.props.color}</li>
        </ul>
      </div>
    )
  }
}



export default CreditCard;
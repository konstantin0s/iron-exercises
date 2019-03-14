import React, { Component } from 'react';


class CreditCard extends React.Component {
  render() {
  
    return (
      <div className="credit-card">
        <div className="credit-card__logo"></div>
        <div className="credit-card__number"></div>
        <div className="credit-card__info"></div>
        {/* <ul>
        <li>Type: {this.props.type}</li>
        <li>number: {this.props.number}</li>
        <li>exp month: {this.props.expirationMonth}</li>
        <li>exp year: {this.props.expirationYear}</li>
        <li>bank: {this.props.bank}</li>
        <li>owner: {this.props.owner}</li>
        <li>background color: {this.props.bgColor}</li>
        <li>color: {this.props.color}</li>
        </ul> */}
      </div>
    )
  }
}



export default CreditCard;
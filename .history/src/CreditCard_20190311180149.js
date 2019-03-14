import React, { Component } from 'react';
import './CreditCard';


class CreditCard extends React.Component {
  render() {
  
    return (
      <div className="credit-card">
        <div className="credit-card__logo">Logo</div>
        <div className="credit-card__number">49494 9d9s9 9494</div>
        <div className='credit-card__info'>
                <div className='credit-card__info_name'>
                    <div className='credit-card__info_label'>CARDHOLDER'S NAME</div>
                    <div>MATT SMITH</div>
                </div>

                <div className='credit-card__info_expiry'>
                    <div className='credit-card__info_label'>VALID UP TO</div>
                    <div>06/2027</div>
                </div>
            </div>
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
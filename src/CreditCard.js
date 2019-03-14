import React, { Component } from 'react';
import './credit-card.css';


class CreditCard extends React.Component {
  render() {
  
    return (
      <div className="credit-card">
        <div className="credit-card__logo">{this.props.type}</div>
        <div className="credit-card__number">{this.props.number}</div>
        <div className='credit-card__info'>
                <div className='credit-card__info_name'>
                    <div className='credit-card__info_label'>CARDHOLDER'S NAME</div>
                    <div>{this.props.owner}</div>
                </div>

                <div className='credit-card__info_expiry'>
                    <div className='credit-card__info_label'>VALID UP TO</div>
                    <div>{this.props.expirationMonth}/{this.props.expirationYear}</div>
                </div>
            </div>
      </div>
    )
  }
}



export default CreditCard;
import React, { Component } from 'react';


class DriverCard extends React.Component {
  render() {
    return (
      <div className="DriverCard">
      <ul>
      <li>{this.props.name}</li>
      <li>{this.props.rating}</li>
      <li>{this.props.img}</li>
        {this.props.car.model} - {this.props.car.licensePlate}
       </ul>


          
        <div className="DriverCard-rating">{this.props.rating}</div>
        <div className="DriverCard-rating">
                <div className='credit-card__info_name'>
                    <div>{this.props.name}</div>
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



export default DriverCard;

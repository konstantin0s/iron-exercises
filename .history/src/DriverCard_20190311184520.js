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
      </div>
    )
  }
}



export default DriverCard;

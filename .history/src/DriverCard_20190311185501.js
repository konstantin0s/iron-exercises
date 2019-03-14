import React, {Component} from 'react';

class DriverCard extends React.Component {
    render() {
        return (
            <div className="DriverCard">
                {/* <ul>
      <li>{this.props.name}</li>
      <li>{this.props.rating}</li>
      <li>{this.props.img}</li>
        {this.props.car.model} - {this.props.car.licensePlate}
       </ul> */}

                <div className="DriverCard-rating">{this.props.rating}</div>
                <div className="DriverCard-info">
                    <div className='nDriverCard-info-name'>
                        <div>{this.props.name}</div>
                    </div>

                    <div className='DriverCard-image'>
                        <div><img src={this.props.img} /></div>
                    </div>
                    <div className='DriverCard-car'>{this.props.car.model} - {this.props.car.licensePlate}</div>
                </div>
            </div>
        )
    }
}

export default DriverCard;

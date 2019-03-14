import React, { Component } from 'react';
import FontAwesomeIcon from "@fontawesome/react-fontawesome"


class Rating extends React.Component {
  static defaultProps = {
    minRating: 0,
    maxRating: 10,
    rating: 5,
    starRatio: 2,
    limit: 1000
  }

  render() {
    return (
      <div className="star-rating">
        <li>Rating: {this.props.children}</li>
      </div>
    )
  }
}



export default Rating;

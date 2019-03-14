import React, { Component } from 'react';


class Greeting extends React.Component {
  render() {
    return (
      <div className="Greeting">
        <ul>
        <li>Language: {this.props.text} {this.props.lang} </li>
        {/* <li>Text: {this.props.text}</li> */}
        </ul>
      </div>
    )
  }
}



export default Greeting;
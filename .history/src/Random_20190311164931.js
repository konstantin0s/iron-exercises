import React, { Component } from 'react';


class Random extends React.Component {
  render() {
    let greetings = {
      de: 'Hallo',
      en: 'Hello',
      fr: 'Bonjour',
      es: 'Hola',
    }
    return (
      <div className="Random">
        <ul>
        {/* <li> {greetings[this.props.lang]} {this.props.children}</li> */}
        </ul>
      </div>
    )
  }
}



export default Greeting;
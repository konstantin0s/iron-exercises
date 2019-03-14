import React, { Component } from 'react';


class Greeting extends React.Component {
  render() {
    let greetings = {
      de: 'Hallo',
      en: 'Hello',
      fr: 'Bonjour',
      es: 'Hola',
    }
    return (
      <div className="Greeting">
        <ul>
        <li> {greetings[this.props.lang]} {this.props.children}</li>
        {/* <li>Text: {this.props.text}</li> */}
        </ul>
      </div>
    )
  }
}



export default Greeting;
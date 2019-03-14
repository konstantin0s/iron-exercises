import React, { Component } from 'react';


class Greeting extends React.Component {
  render() {
    let greetings = {
      de: 'Hallo',
      en: 'Hello',
      fr: 'Bonjour',
      es: 'Hola',
    }
    var greeting;
    switch(this.props.lang) {
      case("de"):
      greeting = "Hallo"
      break;
      case("fr"):
      greeting = "Bonjour"
      break;
      case("en"):
      greeting = "Hello"
      break;
      case("es"):
      greeting = "Hola"
      break;
      default:
      greeting = "Hello"
    }
    return (
      <div className="Greeting">
        <ul>
        <li> {greetings[this.props.lang]} {this.props.children}</li>
        </ul>
      </div>
    )
  }
}



export default Greeting;
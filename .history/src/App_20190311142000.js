import React, { Component } from 'react';
import User from './User';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <User firstName={firstName}/>
      </div>
    );
  }
}

export default App;

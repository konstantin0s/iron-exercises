import React, { Component } from 'react';
import User from './User';
import UsersList from './UsersList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <User />
      </div>
    );
  }
}

export default App;

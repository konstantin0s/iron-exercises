import React, { Component } from 'react';
import User from './User';
import  users  from './UsersList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>User</h1>
          {/* <User 
          firstName='Amazing'
          lastName='Doe'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />  */}
         <User firstName={this.props.firstName}

        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import users  from './UsersList';
import User from './User';
import './App.css';

class App extends Component {
  render() {
    console.log(users);
    return (
  
      // users.map((user) =>
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

        <User 
           {users.firstName}
           {users.lastName}
          {users.gender}
          {users.height}
          {users.picture}
        />
      
      </div>
    );
  }
}

export default App;

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

        {
    users.map(function(value,i)
    {
    return <User firstName={value.firstName} key={i}/>

    }  
    ) 
    }

        {/* <User 
           {users.firstName}
           {users.lastName}
          {users.gender}
          {users.height}
          {users.picture}
        /> */}
      
      </div>
    );
  }
}

export default App;

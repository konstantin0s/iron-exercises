import React, { Component } from 'react';
import User from './User';
import  users  from './UsersList';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.users);
    return (

      // users.map((user) =>
      <div className="App">
        <h1>User</h1>
          <User 
          firstName='Amazing'
          lastName='Doe'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        /> 
         <User 

        />
      </div>
    );
  }
}

export default App;

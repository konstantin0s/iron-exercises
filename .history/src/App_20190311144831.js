import React, { Component } from 'react';
import User from './User';
import  UsersList  from './UsersList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
           {/* <h1>User</h1>
          <User 
          firstName='firstName'
          lastName='Doe'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        /> */}
         <UsersList firstName={this.props.users.firstName}

        />
      </div>
    );
  }
}

export default App;

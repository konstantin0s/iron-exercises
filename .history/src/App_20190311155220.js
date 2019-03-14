import React, { Component } from 'react';
import users  from './UsersList';
import User from './User';
import './App.css';

class App extends Component {
  render() {
    console.log(users);
    return (
      <div className="App">
        <h1>Users:</h1>

        {
    users.map(function(value,i)
    {
    return <User firstName={value.firstName} key={i}
                  lastName={value.lastName} key={i}
                   country={value.country} key={i}
                   img={value.img} key={i}
                  //  isStudent={value.isStudent} key={i}
                    
    />

    }  
    )}
      
      </div>
    );
  }
}

export default App;

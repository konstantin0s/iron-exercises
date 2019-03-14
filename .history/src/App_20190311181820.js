import React, { Component } from 'react';
import users  from './UsersList';
import User from './User';
import Greeting from './Greeting';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Rating from './Rating';
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
                    
    />

    }  
    )}

    {

    users.map(function(value,i)
      {
    return   <Greeting lang="de">{value.firstName}</Greeting>
      }  
    )}


    <Random min={1} max={100}>
    </Random>
   
    <BoxColor r={255} g={0} b={0} ></BoxColor>

    <CreditCard 
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white"
        >
    </CreditCard>


      </div>
    );
  }
}

export default App;

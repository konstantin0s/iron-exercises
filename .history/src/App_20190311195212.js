import React, { Component } from 'react';
import users  from './UsersList';
import User from './User';
import Greeting from './Greeting';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Rating from './Rating';
import DriverCard from './DriverCard';
import './App.css';


class App extends Component {

  // state = {
  //   userA: {
  //     firstName: "Harper",
  //     lastName: "Perez",
  //     avatarUrl:
  //       "http://www.kodlamaker.com/wp-content/uploads/2015/10/codingforkids.png"
  //   },
  //   userB: {
  //     firstName: "Ana",
  //     lastName: "Hello",
  //     avatarUrl:
  //       "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
  //   },
  //   clickCount: 0,
  //   backColor: "yellow"
  // };

  // colorMapper = () => {
  //   return "#" + Math.floor(Math.random() * 16777215).toString(16);
  // };


  // clickHandler = () => {
  //   this.setState({
  //     clickCount: this.state.clickCount + 1
  //   });
  // };

  colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  clickHandler = () => {
    const newCount = this.clickCount + 1;

    if (newCount !== 5) {
      this.setState({
        clickCount: newCount,
        backColor: this.colorMapper()
      });
    } else {
      this.setState({
        clickCount: newCount,
        backColor: "yellow",
        userA: {
          firstName: "Jon",
          lastName: "Doe",
          avatarUrl:
            "http://www.kodlamaker.com/wp-content/uploads/2015/10/codingforkids.png"
        },
        userB: {
          firstName: "Susanne",
          lastName: "Smith",
          avatarUrl:
            "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
        }
      });
    }
  };

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

    <Rating >
          3
    </Rating>

    <DriverCard 
      name="Travis Kalanick"
      rating="★★★★★"
      img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
       car={{model: "Toyota Corolla Altis", licensePlate: "CO42DE"}}>

  </DriverCard>
          
        <h1> Hello Ironhackers! </h1>
        <p>Count is: {this.clickCount}</p>
        <button onClick={this.clickHandler}>Click me</button>
        <User firstName={this.userA.firstName} lastName={this.state.userA.lastName} />
        <User firstName={this.state.userB.firstName} lastName={this.state.userB.lastName} />


      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import users  from './UsersList';
import User from './User';
import Greeting from './Greeting';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Rating from './Rating';
import DriverCard from './DriverCard';
import Facebook from './Facebook';
import Increment from './Increment';
import LikeButton from './LikeButton';
import App2 from './App2';
import Carousel from './Carousel';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
       students: users,
       filteredStudents: []
    }
  }

  countryFilter = (country) => {
    let filteredStudents = this.state.students.filter(filteredStudents => filteredStudents.country == country); 
    this.setState({
      filteredStudents: filteredStudents
    })
  }

  // constructor(props) {
  //   super(props)
  //   // Save the list of countries from profiles and only keep the unique values (Set)
  //   this.countries = [...new Set(users.map(user => user.country))]
  //   // this.state = {
  //   //   selected: null
  //   // }
  // }

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
  

  // clickHandler = () => {
  //   this.setState({
  //     clickCount: this.state.clickCount + 1
  //   });
  // };
 

  // colorMapper = () => {
  //   return "#" + Math.floor(Math.random() * 16777215).toString(16);
  // };

  // clickHandler = () => {
  //   const newCount = this.state.clickCount + 1;

  //   if (newCount !== 5) {
  //     this.setState({
  //       clickCount: newCount,
  //       backColor: this.colorMapper()
  //     });
  //   } else {
  //     this.setState({
  //       clickCount: newCount,
  //       backColor: "yellow",
  //       userA: {
  //         firstName: "Jon",
  //         lastName: "Doe",
  //         avatarUrl:
  //           "http://www.kodlamaker.com/wp-content/uploads/2015/10/codingforkids.png"
  //       },
  //       userB: {
  //         firstName: "Susanne",
  //         lastName: "Smith",
  //         avatarUrl:
  //           "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
  //       }
  //     });
  //   }
  // };

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
          
        {/* <h1> Hello Ironhackers! </h1>
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={this.clickHandler}>Click me</button>
        <User firstName={this.state.userA.firstName} lastName={this.state.userA.lastName} />
        <User firstName={this.state.userB.firstName} lastName={this.state.userB.lastName} /> */}

      

        {
    users.map(function(value,i)
    {
    return <Facebook firstName={value.firstName} key={i}
                  lastName={value.lastName} key={i}
                   country={value.country} key={i}
                   img={value.img} key={i}
                   isStudent={value.isStudent} key={i}
                    />

    }  
    )}

    <Increment>

    </Increment>

    <button onClick={()=> {this.filteredStudents("England")}}>UK</button>
    <button onClick={()=> {this.filteredStudents("Germany")}}>Germany</button>
    <button onClick={()=> {this.filteredStudents("USA")}}>USA</button>
    <button onClick={()=> {this.filteredStudents("Malaysia")}}>Malaysia</button>

    <Facebook>

    </Facebook>
 
    <App2>

    </App2>

    <Carousel
                imgs={["https://randomuser.me/api/portraits/women/1.jpg", 
                "https://randomuser.me/api/portraits/men/1.jpg",
                "https://randomuser.me/api/portraits/women/2.jpg", 
                "https://randomuser.me/api/portraits/men/2.jpg"]
            } />

            <LikeButton  col="blue">>

            </LikeButton>
    
      </div>
    );
  }
}

export default App;

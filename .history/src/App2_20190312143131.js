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



  render() {

    return (
      <div className="App">
       

    <button onClick={()=> {this.filteredStudents("England")}}>UK</button>
    <button onClick={()=> {this.filteredStudents("Germany")}}>Germany</button>
    <button onClick={()=> {this.filteredStudents("USA")}}>USA</button>
    <button onClick={()=> {this.filteredStudents("Malaysia")}}>Malaysia</button>


      </div>
    );
  }
}

export default App;

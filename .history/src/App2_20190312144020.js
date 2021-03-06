import React, { Component } from 'react';
import users  from './UsersList';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
       students: users,
       searchStudents: users
    }
  }

  // countryFilter = (country) => {
  //   let filteredStudents = this.state.students.filter(filteredStudents => filteredStudents.country == country); 
  //   this.setState({
  //     filteredStudents: filteredStudents
  //   })
  // }



  render() {

    return (
      <div className="App">
       
    <input onChange={this.search} type="text" placeholder="search students" />
       {this.state.searchStudents.map((student) => 
         <h1>Hi, {student.firstName}</h1>
       )}
       
         </div>
    
    );
  }
}

export default App;

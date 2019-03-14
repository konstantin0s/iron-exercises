import React, { Component } from 'react';
import users  from './UsersList';

import './App.css';


class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
       students: users,
       searchStudents: users
    }
    this.search = this.search.bind(this);
  }



  search(event) {
   let searchVal = event.currentTarget.value;

   let searchedStudents = this.state.students.filter((student) =>{
    return student.firstName.indexOf(searchVal) !== -1;
   })
   this.setState({searchStudents: searchedStudents})
  }


  render() {

    return (
      <div className="search">
       
    <input onChange={this.search} type="text" placeholder="search students" />
       {this.state.searchStudents.map((student) => 
         <h1>Hi, {student.firstName}</h1>
       )}
       
         </div>
    
    );
  }
}

export default Carousel;

import React, { Component } from 'react';
import './facebook.css';
import users from './UsersList';

class Facebook extends React.Component {
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
      <div className="Facebook">
      <ul>
      <h2 style={{ backgroundColor: this.props.theColor }}></h2>
      <li>Name: {this.props.firstName}</li>
      <li>Lastname: {this.props.lastName}</li>
      <li>country: {this.props.country}</li>
       <li>Image: <img src={this.props.img} /></li>
       <li>Type: {this.props.isStudent? "Student" : "Teacher"}</li>
       </ul>
      </div>
    )
  }
}



export default Facebook;
import React, { Component } from 'react';
import users  from './UsersList';

import './App.css';


class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
       properties: users.properties,
       property: users.properties[0]
    }
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

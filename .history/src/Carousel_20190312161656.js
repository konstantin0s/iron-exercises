import React, { Component } from 'react';
import users  from './UsersList';
import data from './data';

import './App.css';


class Carousel extends Component {


  constructor(props) {
    super(props);
    this.state = {
       properties: data.properties,
       property: data.properties[0]
    }
  }

nextProperty = () => {

}

prevProperty = () => {
  
}

  render() {
        const { properties, property } = { this.state }
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

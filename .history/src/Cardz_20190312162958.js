import React, { Component } from 'react';
import users  from './UsersList';
import data from './data';
import './App.css';


class Cardz extends Component {


  constructor(props) {
    super(props);
    this.state = {
       properties: data.properties,
       property: data.properties[0]
    }
  }

  render() {
   
    return (
        <div className="cardz">
       

         </div>
    
    );
  }
}

export default Cardz;

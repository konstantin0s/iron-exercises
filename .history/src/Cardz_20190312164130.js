import React, { Component } from 'react';
import users  from './UsersList';
import data from './data';



const Cardz = ({property}) => {

    const {index} = property;

   
    return (
        <div id={`image-${index}`} className="cardz">
       

         </div>
    
    );
  }
}

export default Cardz;

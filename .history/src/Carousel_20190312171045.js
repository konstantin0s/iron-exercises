import React, { Component } from 'react';
import users  from './UsersList';
import data from './data';


const Carousel = ({property}) => {

  const {index} = property;

 
  return (
      <div id={`image-${index}`} className="cardz">
       <img src={picture} />

       </div>
  
  );
}



export default Carousel;

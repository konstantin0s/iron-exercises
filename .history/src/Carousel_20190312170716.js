import React, { Component } from 'react';
import users  from './UsersList';
import data from './data';





const Card = ({property}) => {

  const {index} = property;

 
  return (
      <div id={`image-${index}`} className="cardz">
       <img src={picture} />

       </div>
  
  );
}


  render() {
        const { properties, property } = this.state;
    return (
      <div className="carousel">
       
      <button onClick={() => this.nextProperty()} 
      disabled={property.index === data.properties.length - 1}>Next</button>

<button onClick={() => this.prevProperty()} 
      disabled={property.index === 0}>Prev</button>
      

         </div>
    
    );
  }


export default Carousel;

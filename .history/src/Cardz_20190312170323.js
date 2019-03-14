import React, { Component } from 'react';




const Cardz = ({property}) => {

    const {index} = property;

   
    return (
        <div id={`image-${index}`} className="cardz">
         <img src={picture} />

         </div>
    
    );
  }


export default Cardz;

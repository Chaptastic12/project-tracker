import React from 'react';

import './Card.css';

const Card = props =>{
     return (
          <div className="card">
               <h1>{props.number} </h1> 
               <h2>{props.name}</h2>
               <hr></hr>
               <h2>{props.author} || {props.status}</h2>
               <p>{props.description}</p>
          </div>
     )
}

export default Card;
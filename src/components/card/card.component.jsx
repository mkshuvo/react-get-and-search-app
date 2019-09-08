import React from 'react';
import './card.style.css';
//functional component
export const Card = (props)=>(
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monsters"/>
        <h2>{props.monster.name}</h2>
        <h3>{props.monster.email}</h3>
    </div>
);
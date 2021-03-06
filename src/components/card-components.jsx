import React from 'react';
import './card.style.css';


export const Card = props => (
    <div className='card-container'>
        <img 
            alt='monster'
            src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`}
        />
        <h1 className="monstersName"> {props.monsters.name} </h1>
        <p className="email"> {props.monsters.email} </p>
    </div>
);


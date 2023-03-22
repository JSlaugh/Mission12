import React from 'react';
import '../Styles/App.css';

//Declaring types for each thing because otherwise it gets mad
function Card(team: {
    tid: number;
    cid: number;
    did: number;
    school: string;
    name: string;
    abbrev: string;
    pop: number;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
} ) {

    return (
        //The code for information in each card
        <ul className='listDecorationNone'>
            <li className='bold'>{team.school}</li>
            <li>{team.name}</li>
            <li>{team.city}, {team.state}</li>
        </ul>
    );
  }
  
  export default Card;
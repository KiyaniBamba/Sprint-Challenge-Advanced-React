import React from 'react';

import Card from './Card.js';


const PlayersData = ({props}) => {
    return Object.keys(props).map( (key)=> {
        return (
            <div> 
                <br/>
                <Card>
                name: {props[key].name} <br/>
                country: {props[key].country} <br/>
                </Card>
            </div>
        )
    })
}



export default PlayersData
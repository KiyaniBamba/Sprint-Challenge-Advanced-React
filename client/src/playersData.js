import React from 'react';

// import Card from './Card.js';



const PlayersData = ({props}) => {
    
    return Object.keys(props).map( (key)=> {
        return (
            <div> 
                <br/> 
                {/* <Card> */}
                <h2> {props[key].name} </h2> 
                country: {props[key].country} <br/>
                Search ranked: {props[key].searches} <br/>
                {/* </Card> */}
            </div>
        )
    })
}



export default PlayersData
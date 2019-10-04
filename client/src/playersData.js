import React from 'react';


const PlayersData = ({props}) => {
    return Object.keys(props).map( (key)=> {
        return (
            <div> 
                <br/>
                name: {props[key].name} <br/>
                country: {props[key].country} <br/>
                <br/>
            </div>
        )
    })
}



export default PlayersData
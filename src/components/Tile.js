import React, {useState} from 'react'

function Tile (props) {
    let hogObj = props.pig;
    return (
        <div class='pigTile' >
            <h2>Name: {hogObj.name}</h2>
            <img src={hogObj.image} alt={hogObj.name}></img>
        </div>
    );
}

export default Tile;
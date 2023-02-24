import React, {useState} from 'react'

function Tile (props) {
    let hogObj = props.pig;
    return (
        <div className='ui eight wide column tilePig'  >
            <h3>Name: {hogObj.name}</h3>
            <img src={hogObj.image} alt={hogObj.name}></img>
        </div>
    );
}

export default Tile;
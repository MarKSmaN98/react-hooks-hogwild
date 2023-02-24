import React, {useState} from 'react'
import Tile from './Tile'

function TileContainer (props) {

return (        

    <div id='tileContainer'>
    {
        props.arr.map(hog => {
            return <Tile pig={hog} />;
        })
    }
    </div>
)

}
export default TileContainer;

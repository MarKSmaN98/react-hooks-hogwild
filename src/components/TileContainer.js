import React, {useState} from 'react'
import Tile from './Tile'

function TileContainer (props) {

return (        

    <div id='tileContainer' className="ui grid container">
    {
        props.arr.map(hog => {
            return <Tile pig={hog} />;
        })
    }
    </div>
)

}
export default TileContainer;

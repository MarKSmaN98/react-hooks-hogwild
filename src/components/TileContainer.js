import React, {useState} from 'react'
import Tile from './Tile'

function TileContainer (props) {

    //const [] = useState('img')
    const displayData = () => {
        console.log('clicked');
    }

    return (        

        <div id='tileContainer' className="ui grid container">
        {
            props.arr.map(hog => {
                return <Tile pig={hog} onClick={displayData()}/>;
            })
        }
        </div>
    )

    }
export default TileContainer;

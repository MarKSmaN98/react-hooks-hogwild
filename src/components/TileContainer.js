import React, {useState} from 'react'
import Tile from './Tile'

function TileContainer (props) {

    //const [] = useState('img')
    const displayData = () => {
        console.log('clicked');
    }
    let iter = 0;

    return (        

        <div id='tileContainer' className="ui grid container">
        {
            props.arr.map(hog => {
                iter++;
                return (<Tile pig={hog} id={iter} onClick={displayData()}/>)
            })
        }
        </div>
    )

    }
export default TileContainer;

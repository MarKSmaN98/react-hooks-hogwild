import React, {useState} from 'react';
import hogs from '../porkers_data';
import TileContainer from './TileContainer';

function HogFilter (props) {
    //logic for filter
    let filteredHogs = hogs.filter(hog => {
        if (hog.greased == true){
            return hog;
        }
    })
    let pigArr = [...hogs]

    const [isGreased, setIsGreased] = useState(false);

    const filterChange = () => {
        setIsGreased(!isGreased);
        
    }

    return (
        <div id='TileContainer'>
            <button id='test' onClick={() => filterChange()}>{`Greased Filter: ${isGreased}`}</button>
            <TileContainer arr = {isGreased ? filteredHogs : pigArr} />
        </div>

    )
}

export default HogFilter;
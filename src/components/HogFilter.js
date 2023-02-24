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

    const [sortValue, setSortValue] = useState('all');

    const filterChange = () => {
        setIsGreased(!isGreased);
        
    }

    const sorter = (e) => {
        setSortValue(e.target.value);
    }
    
    const byNameOrWeight = (hogA, hogB) => {
        if (sortValue == 'name'){
            if(hogA.name > hogB.name){
                return 1;
            }
            else if (hogA.name < hogB.name) {
                return -1;
            }
            else{return 0;}
        }
        else if (sortValue == 'weight') {
            if(hogA.weight > hogB.weight){
                return 1;
            }
            else if (hogA.weight < hogB.weight) {
                return -1;
            }
            else{return 0;}
        }
        else {
            return 0;
        }
    }

    const sortedHogs = (isGreased? [...filteredHogs] : [...hogs]).sort(byNameOrWeight)


    return (
        <div id='TileContainer'>
            <button id='test' onClick={() => filterChange()}>{`Greased Filter: ${isGreased}`}</button>
            <label>  Sort By:
            <select 
                name='sort' 
                value={sortValue}
                onChange={e => {sorter(e)}}> 
                <option value='all'>None</option>
                <option value='name'>Name</option>
                <option value='weight'>Weight</option>
            </select>
            </label>
            <TileContainer arr = {sortedHogs} />
            <br></br>
            <br></br>
        </div>

    )
}

export default HogFilter;
import React, {useState} from 'react'

function Tile (props) {
    let hogObj = props.pig;
    const [show, setShow] = useState(true);

    const showDetails = () => {
        console.log("clicked");
        setShow(!show);

    }


    return (
        <div key={props.id} id={props.id} className='ui eight wide column tilePig'  >
            <h3>Name: {hogObj.name}</h3>
            <img src={hogObj.image} alt={hogObj.name} onClick={showDetails}></img>
            <p hidden={show}>Specialty: {hogObj.specialty}</p>
            <p hidden={show}>Weight: {hogObj.weight}</p>
            <p hidden={show}>Greased: {hogObj.greased? 'Absolutely' : 'Nope :('}</p>
            <p hidden={show}>Highest Medal Achieved: {hogObj.["highest medal achieved"]}</p>
        </div>
    );
}

export default Tile;
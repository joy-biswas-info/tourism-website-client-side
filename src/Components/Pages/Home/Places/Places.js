import React, { useEffect, useState } from 'react';
import Place from './place/Place';
import "./Places.css"

const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data=>setPlaces(data))
    },[])
    return (
        <div id="spot">
            {
                places.map(place=><Place place={place} key={place._id}></Place>)
            }
        </div>
    );
};

export default Places;
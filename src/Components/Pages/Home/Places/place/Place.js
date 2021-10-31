import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Place = (props) => {
    const {name,_id,description,img,cost}=props.place
    return (
        <div>
            <img src={img} alt="spot" />
            <h2>{name}</h2>
            <p>{description}</p>
            <h2>{cost}</h2>
            <Link to={`placeorder/${_id}`}>
            <Button variant="danger" >Book Now </Button>
            </Link>
        </div>
    );
};

export default Place;
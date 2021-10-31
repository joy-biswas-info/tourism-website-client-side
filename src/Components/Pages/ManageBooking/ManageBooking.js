import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ManageBooking.css'

const ManageBooking = () => {
    const [myOrder, setMyOrder] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/manageorder`)
            .then(res => res.json())
            .then(data => setMyOrder(data));
        console.log(myOrder);
    }, []);
    return (
        <div>
            <h2>
                Manage Booking 
            </h2>

        </div>
    );
};

export default ManageBooking;
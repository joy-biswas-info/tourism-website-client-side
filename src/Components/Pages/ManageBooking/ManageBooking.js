import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ManageBooking.css'

const ManageBooking = () => {
    const [manageOrder, setManageOrder] = useState();
    useEffect(() => {
        fetch(`https://ancient-hollows-54145.herokuapp.com/manageorder`)
            .then(res => res.json())
            .then(data => setManageOrder(data));
        console.log(manageOrder);
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
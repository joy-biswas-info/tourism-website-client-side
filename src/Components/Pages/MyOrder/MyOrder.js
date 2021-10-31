import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MyOrder = () => {
    const { email } = useParams();
    const [myOrder, setMyOrder] = useState();
    console.log(myOrder);
    useEffect(() => {
        fetch(`http://localhost:5000/myorder/${email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, []);
    return (
        <div>
            {myOrder &&
                <h2>{myOrder.length}</h2>
            }
        </div>
    );
};

export default MyOrder;
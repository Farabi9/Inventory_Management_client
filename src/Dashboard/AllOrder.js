import React, { useEffect, useState } from 'react';

const AllOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(result => {
                setOrders(result)
            })
    }, [])
    return (
        <div className='mt-10'>
            <h2 className='text-2xl mb-8 font-bold uppercase'>Orders: {orders.length} </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((o, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{o.name}</td>
                                <td>{o.email}</td>
                                <td>{o.productName}</td>
                                <td>{o.quantity}</td>
                                <td>{o.address}</td>
                                <td>{o.phone}</td>
                                <td><button class="btn btn-xs">Cancel</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrder;
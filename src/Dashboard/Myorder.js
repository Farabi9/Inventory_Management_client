import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Myorder = () => {
    const [orders, setOrders] = useState([])
    const { email } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/addorder/${email}`)
            .then(res => res.json())
            .then(result => {
                setOrders(result)
            })
    }, [email])
    return (
        <div class="overflow-x-auto">

            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product Orderd</th>
                        <th>quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((or, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{or.name}</td>
                            <td>{or.email}</td>
                            <td>{or.productName}</td>
                            <td>{or.quantity}</td>
                            <td> <button class="btn btn-sm bg-red-500 text-black mr-2">Cancel Order</button>
                                <button class="btn btn-sm text-black bg-green-400 p-2">Pay</button></td>


                        </tr>)
                    }

                </tbody>

            </table>

        </div>
    );
};

export default Myorder;
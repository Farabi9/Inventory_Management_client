import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Myorder = () => {
    const [orders, setOrders] = useState([])
    const { email } = useParams()
    useEffect(() => {
        fetch(`https://powerful-retreat-95123.herokuapp.com/addorder/${email}`)
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
                        <th>Price</th>
                        <th></th>
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
                            <td>{or.prize}</td>
                            <td>
                            <Link to={`/dashboard/payment/${or._id}`}><button className='btn btn-sm btn-success'>cancel</button></Link>
                            </td>
                            <td>  
                            <Link to={`/dashboard/payment/${or._id}`}><button className='btn btn-sm btn-success'>Pay</button></Link>
                            </td>


                        </tr>)
                    }

                </tbody>

            </table>

        </div>
    );
};

export default Myorder;
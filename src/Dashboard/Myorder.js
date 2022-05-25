import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Myorder = () => {
    const [orders, setOrders] = useState([])
    const {email} = useParams()
    useEffect(() =>{
        fetch(`http://localhost:5000/addorder/${email}`,{
            method: 'GET',
            headers:{
                'content-type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(result => setOrders(result))
    },[email])
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
          </tr>)
      }
    
    </tbody>
  </table>
</div>
    );
};

export default Myorder;
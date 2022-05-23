import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id}= useParams();
    const [product, setProduct] = useState({});
    useEffect(() =>{
        fetch(`http://localhost:5000/tools/${id}`)
        .then(res => res.json())
        .then(data => {
           console.log(data)
        });
    },[id])
    return (
        <div class="card w-76 h-50 my-5 mx-5 bg-base-100 shadow-xl">
  <figure><img src={product.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="text-2xl font-bold">{product.name}</h2>
    <p>{product.description}</p>
    <p>Available Quanity: {product.availableQuantity}</p>
    <p>Min Quanity: {product.minQuantity}</p>
    <p>Price per peice: ${product.prize}</p>
  </div>
</div>

    );
};

export default Purchase;
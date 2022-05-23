import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Purchase = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({});
  
  
  useEffect(() => {
    fetch(`http://localhost:5000/tools/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      });
  }, [id])
  
  return (
    
      <div class="justify-center  mx-auto	mt-8 mb-8	 card w-80 bg-base-100 shadow-xl">
      <figure><img src={product.img} alt="" /></figure>
      <div class="card-body">
        <h2 class="text-2xl font-bold">{product.name}</h2>
        <p className='text-sm'>{product.description}</p>
        <p className='font-bold'>Available Quanity: {product.availableQuantity}</p>
        <p className='font-bold'>Min Quanity: {product.minQuantity}</p>
        <p className='font-bold'>Price per piece: ${product.prize}</p>
      </div>
    </div>
   

  );
};

export default Purchase;
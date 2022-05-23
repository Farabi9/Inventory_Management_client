import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';


const Purchase = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({});
  const [user] = useAuthState(auth)


  useEffect(() => {
    fetch(`http://localhost:5000/tools/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      });
  }, [id])

  return (
    <div>
      <div>
        <div className="hero  text-red-500">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">{user.displayName}</h1>
              <p className="py-6 text-3xl">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center  mx-auto	mt-8 mb-8	 card w-80 bg-base-100 shadow-xl">
        <figure><img src={product.img} alt="" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className='text-sm'>{product.description}</p>
          <p className='font-bold'>Available Quanity: {product.availableQuantity}</p>
          <p className='font-bold'>Min Quanity: {product.minQuantity}</p>
          <p className='font-bold'>Price per piece: ${product.prize}</p>

        </div>
        <button className="btn btn-primary">Procced</button>

      </div>
    </div>


  );
};

export default Purchase;
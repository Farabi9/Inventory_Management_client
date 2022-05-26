import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';

const ManageProducts = () => {
    const [product, setProduct] = useState([]);
    useEffect(() =>{
        fetch('https://powerful-retreat-95123.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Min Quantity</th>
            </tr>
          </thead>
          <tbody>
            {
                product.map((p, index) => <AllProduct
                key={p._id}
                index={index}
                p={p}
                ></AllProduct>)
            }
            
          </tbody>
        </table>
      </div>
    );
};

export default ManageProducts;
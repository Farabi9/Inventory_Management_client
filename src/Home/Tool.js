import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({tool}) => {
    const {name, img, description, prize, availableQuantity, minQuantity} = tool;
    return (
        <div class="card w-76 h-50 my-5 mx-5 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="text-2xl font-bold">{name}</h2>
    <p>{description}</p>
    <p>Available Quanity: {availableQuantity}</p>
    <p>Min Quanity: {minQuantity}</p>
    <p>Price per peice: ${prize}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary mx-auto"><Link to='/purchase'>Buy Now</Link></button>
    </div>
  </div>
</div>
    );
};

export default Tool;
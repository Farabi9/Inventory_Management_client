import React from 'react';

const SingleReview = ({r}) => {
    return (
       
            <div class=" card w-100 bg-green-100 mx-3 shadow-xl">
                <div class="card-body">
                <i class="fa-solid text-5xl fa-star-half-stroke"></i>
                  <h2 class="card-title mx-auto">Rating: {r.rating}</h2>
                  
                  <p> {r.description}</p>
                </div>
              </div>
       
    );
};

export default SingleReview;
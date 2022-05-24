import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(result => setReviews(result))
    },[])
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 my-10 '>
            {
                reviews.map(r => <SingleReview
                key={r._id}
                r={r}
                ></SingleReview>)
            }
        </div>
    );
};

export default Review;
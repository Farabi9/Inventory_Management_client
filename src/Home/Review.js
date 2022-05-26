import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
        fetch('https://powerful-retreat-95123.herokuapp.com/review')
        .then(res => res.json())
        .then(result => setReviews(result))
    },[])
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 my-13 mb-4'>
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
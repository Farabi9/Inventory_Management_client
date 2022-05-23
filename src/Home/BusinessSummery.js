import React from 'react';


const BusinessSummery = () => {
    return (
        <div>
            <h2 className='text-4xl bg-slate-500 p-5 mx-24 text-primary font-bold mb-8'>The Trust We Have Achived In 5yr</h2>
            <div className="divider"></div>
            <div className="divider"></div>
            <div className="stats shadow w-full my-5 bg-white-300">

<div className="stat place-items-center ">
<i className="fa-solid  text-5xl	my-2 fa-earth-asia"></i>
    <div className="stat-title text-red-500 text-xl font-bold">Countries</div>
    <div className="stat-value">30+</div>
</div>

<div className="stat place-items-center">
<div className='my-2'>
<i className="fa-solid text-5xl fa-person-military-pointing"></i>
<i className="fa-solid text-5xl fa-person-military-pointing"></i>
</div>
    <div className="stat-title text-red-500 text-xl font-bold">Customers</div>
    <div className="stat-value text-secondary">4,200+</div>
</div>

<div className="stat place-items-center">
<i className="fa-solid text-5xl my-2 fa-comments"></i>
    <div className="stat-title text-red-500 text-xl font-bold">Feedback</div>
    <div className="stat-value">1,200+</div>

</div>
<div className="stat place-items-center">
<i className="fa-solid text-5xl my-2 fa-face-smile"></i>
    <div className="stat-title text-red-500 text-xl font-bold">Rating</div>
    <div className="stat-value" >
        <div className="rating" >
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
            
        </div>
    </div>

</div>

</div>
        </div>
    );
};

export default BusinessSummery;
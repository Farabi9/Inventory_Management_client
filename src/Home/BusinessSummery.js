import React from 'react';


const BusinessSummery = () => {
    return (
        <div>
            <h2 className='text-4xl bg-slate-500 p-5 mx-24 text-primary font-bold mb-8'>The Trust We Have Achived In 5yr</h2>
            <div class="divider"></div>
            <div class="divider"></div>
            <div class="stats shadow w-full my-5 bg-white-300">

<div class="stat place-items-center ">
<i class="fa-solid  text-5xl	my-2 fa-earth-asia"></i>
    <div class="stat-title text-red-500 text-xl font-bold">Countries</div>
    <div class="stat-value">30+</div>
</div>

<div class="stat place-items-center">
<div className='my-2'>
<i class="fa-solid text-5xl fa-person-military-pointing"></i>
<i class="fa-solid text-5xl fa-person-military-pointing"></i>
</div>
    <div class="stat-title text-red-500 text-xl font-bold">Customers</div>
    <div class="stat-value text-secondary">4,200+</div>
</div>

<div class="stat place-items-center">
<i class="fa-solid text-5xl my-2 fa-comments"></i>
    <div class="stat-title text-red-500 text-xl font-bold">Feedback</div>
    <div class="stat-value">1,200+</div>

</div>
<div class="stat place-items-center">
<i class="fa-solid text-5xl my-2 fa-face-smile"></i>
    <div class="stat-title text-red-500 text-xl font-bold">Rating</div>
    <div class="stat-value" >
        <div class="rating" >
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked disabled />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked disabled/>
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked disabled/>
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
            
        </div>
    </div>

</div>

</div>
        </div>
    );
};

export default BusinessSummery;
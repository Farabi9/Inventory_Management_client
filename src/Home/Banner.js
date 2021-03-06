import React from 'react';
import { Link } from 'react-router-dom';
import phone from '../Image/phone.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={phone} className="lg:max-w-lg sm:max-w-sm rounded-lg shadow-2xl"  alt=''/>
    <div>
      <h1 className="text-5xl p-5 font-bold uppercase">Phone Pear</h1>
      <p className="py-6 uppercase font-bold">We Provide you all the best Phone parts. <br /> You can find here lens, camara, battery, display etc...etc. 
      <br />
      We provide fast delivery and customer satisfaction
      </p>
      <button className="btn btn-primary font-bold"><Link to='/dashboard'>Find Items</Link></button>
    </div>
  </div>
</div>
    );
};

export default Banner;
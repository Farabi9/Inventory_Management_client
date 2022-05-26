import React from 'react';
import apple from '../../src/Image/apple.jpg'

const Company = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
  <div class="hero-content flex-col lg:flex-row">
    <img src={apple} alt='' />
    <div>
      <h1 class="text-5xl font-bold">Our Company</h1>
      <p class="py-6 font-bold">We are leading here for more than 5 years with great reputation. You can look on us and look on our review. We are working on more than 30+ countries.</p>
      
    </div>
  </div>
</div>
    );
};

export default Company;
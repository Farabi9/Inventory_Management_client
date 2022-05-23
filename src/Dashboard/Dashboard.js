import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import{useAuthState} from 'react-firebase-hooks/auth'
import auth from '../firebase.init';



const Dashbord = () => {
const [user] =useAuthState(auth);

    return (
        <div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
      <h2 className='text-3xl font-bold text-purple-500'>Welcome to your Phone Pear Dashboard</h2>
     <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li className='font-mono font-bold bg-primary rounded-md'><Link to='/dashboard'>My Orders</Link></li>
      <li  className='font-mono font-bold bg-primary rounded-md mt-5'><Link to='/dashboard/review'>Add a Reviews</Link></li>
       <>
        <li  className='font-mono font-bold bg-primary rounded-md mt-5'>
        <Link to='/dashboard/users'>My Profile</Link></li>
        
      </>
    </ul>
  
  </div>
</div>
    );
};

export default Dashbord;
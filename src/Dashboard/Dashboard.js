import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';



const Dashbord = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)

  return (
    <div className="drawer drawer-mobile ">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h2 className='text-3xl font-bold mt-10 text-purple-500'>Welcome to your Phone Pear Dashboard</h2>
        <Outlet />


      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      
          <li className='font-mono font-bold bg-primary rounded-md'><Link to={`/dashboard/myorder/${user.email}`} >My Orders</Link></li>
          <li className='font-mono font-bold bg-primary rounded-md mt-5'><Link to='/dashboard/addreview'>Add a Reviews</Link></li>
          
            <li className='font-mono font-bold bg-primary rounded-md mt-5'>
              <Link to='/dashboard/myprofile'>My Profile</Link></li>
          <>
            <li className='font-mono font-bold bg-primary rounded-md mt-5'>
              <Link to='/dashboard/addproduct'>Add Product</Link></li>
            <li className='font-mono font-bold bg-primary rounded-md mt-5'>
              <Link to={`/dashboard/myorder/allorder`}>All Orders</Link></li>
            <li className='font-mono font-bold bg-primary rounded-md mt-5'>
              <Link to='/dashboard/manageproduct'>Manage Products</Link></li>
            <li className='font-mono font-bold bg-primary rounded-md mt-5'>
              <Link to='/dashboard/users'>All Users</Link></li>

          </>
        </ul>

      </div>
    </div>
  );
};

export default Dashbord;
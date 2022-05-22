
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';


const Navbar = () => {
    const [user] = useAuthState(auth);
      
    const signout =() =>{
        signOut(auth)
    }


    const menuItems = <>
        <li className='text-xl'><Link to='/'>Home</Link></li>
        <li className='text-xl'><Link to='/protfolio'>Protfolio</Link></li>

        <li className='text-xl'><Link to='/contract'>Contract</Link></li>
        <li className='text-xl'><Link to='/about'>About</Link></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box-500 ">
                            {menuItems}

                        </ul>
                    </div>
                    <li className="btn btn-ghost  normal-case text-5xl"><Link to='/'>PHONE PEAR</Link></li>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        {menuItems}
                    </ul>
                </div>
                <div class="navbar-end">
                   { user ? <li onClick={signout}  class="btn"><Link to='/'>Sign out</Link></li> : <li  class="btn"><Link to='/login'>login</Link></li>}
                </div>
            </div>

        </div>
    );
};

export default Navbar;
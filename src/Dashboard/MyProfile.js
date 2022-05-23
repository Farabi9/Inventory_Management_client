import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProfile = () => {
  const [user] = useAuthState(auth);

  return (
    
      <div className="hero  bg-base-100">
        <div className="hero-content w-full">
          <div className="text-center lg:text-left">
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" value={user.email} readOnly />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" value={user.displayName} disabled />
                <input type="text" placeholder="Education" className="input input-bordered mt-5" name='education' />
                <input type="text" placeholder="Location" name='location' className="input input-bordered mt-5" />
                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full  mt-5" />
                <input type="text" placeholder="Linkdin Profile Link" className="input input-bordered mt-5" name='linkedin' />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MyProfile;
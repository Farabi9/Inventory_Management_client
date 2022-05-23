import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProfile = () => {
  const [user] = useAuthState(auth);

  return (
    
      <div class="hero  bg-base-100">
        <div class="hero-content w-full">
          <div class="text-center lg:text-left">
          </div>
          <div class="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" class="input input-bordered" value={user.email} readOnly />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" class="input input-bordered" value={user.displayName} disabled />
                <input type="text" placeholder="Education" className="input input-bordered mt-5" name='education' />
                <input type="text" placeholder="Location" name='location' class="input input-bordered mt-5" />
                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full  mt-5" />
                <input type="text" placeholder="Linkdin Profile Link" class="input input-bordered mt-5" name='linkedin' />

              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MyProfile;
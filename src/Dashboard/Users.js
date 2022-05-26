import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';


const Users = ({refetch}) => {
 const [users, setUsers] = useState([])
 const [adminUser, setAdminUser] = useState([])
 const [user] = useAuthState(auth)
 const {email} = useParams()

 useEffect(() =>{
     fetch(`http://localhost:5000/user/admin/${email}`)
     .then(res => res.json())
     .then(result => {
         setAdminUser(result)
     })
 },[email])
 useEffect(() =>{
     fetch('http://localhost:5000/users')
     .then(res => res.json())
     .then(result => setUsers(result))
 },[])
 const makeAdmin =() =>{
     fetch(`http://localhost:5000/user/admin/${user.email}`,{
         method: 'PUT',
     })
     .then(res => res.json())
     .then(data =>{
         console.log(data)
         if(data.acknowledged){
            toast.success('Admin maked Successfully')
            refetch()
         }
     })
 }
    return (
        <div className='mt-10'>
            <h2 className='text-2xl mb-8 font-bold'>All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((u, index) =>  
                        <tr>
                        <th>{index + 1}</th>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{adminUser.role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Admin</button>  }
</td>
                      </tr>)
                    }
                           
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
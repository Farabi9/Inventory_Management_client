import React, { useEffect, useState } from 'react';


const Users = () => {
 const [users, setUsers] = useState([])
 useEffect(() =>{
     fetch('http://localhost:5000/users')
     .then(res => res.json())
     .then(result => setUsers(result))
 },[])
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
                        <th>1</th>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td><button class="btn btn-xs">Admin</button>
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
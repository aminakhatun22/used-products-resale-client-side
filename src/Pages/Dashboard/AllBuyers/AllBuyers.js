import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';


const AllBuyers = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);

    const url = 'http://localhost:5000/users';


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0)
                    toast.success('Make admin successfully')
                refetch()
            })
    }
    return (
        <div>
            <h3 className='text-3xl mb-5'>All Buyers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Delete</th>
                            <th>Make Admin</th>
                            <th>Verify</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td><button className="btn btn-sm">Delete</button></td>
                                <td>{user.category !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-sm">Make Admin</button>}</td>
                                <td><button className="btn btn-sm">Small</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllBuyers;
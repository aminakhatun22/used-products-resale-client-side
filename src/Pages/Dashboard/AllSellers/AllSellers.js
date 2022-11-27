import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
// import React, { useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';


const AllSeller = () => {
    // const { user } = useContext(AuthContext);
    // console.log(user);

    const url = 'http://localhost:5000/users';


    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-3xl mb-5'>All Seller</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>

                            <th>Email</th>
                            <th>Name</th>
                            <th>Delete</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button className="btn btn-sm">Delete</button></td>
                                <td><button className="btn btn-sm">Verify</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';


const AllBuyers = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);

    const url = 'http://localhost:5000/allbuyers';


    const { data: users = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-3xl mb-5 text-pink-500 text-center mt-10'>All Buyers</h3>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10 mb-10 ml-10 mr-10 p-7  '>
                {
                    users.map(user => <div className="card w-96 bg-base-100 shadow-xl ">

                        <div className="card-body border  rounded-lg border-pink-500">
                            <h2 className="card-title">
                                {user.name}
                                <div className="badge badge-secondary">{user.email}</div>
                            </h2>

                            <div className="card-actions justify-end">
                                <div className="badge badge-outline btn">Delete</div>
                                <div className="badge badge-outline btn">Verify</div>
                            </div>
                        </div>
                    </div>)
                }

            </div>



        </div >
    );
};

export default AllBuyers;
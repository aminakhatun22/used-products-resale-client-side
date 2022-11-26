import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useState(AuthContext);

    const url = `http://localhost:5000/orders?email=${user?.email}`;


    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-3xl mb-5'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>

                            <th>Title</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>{order.Name}</td>
                                <td>{order.img}</td>
                                <td>{order.resale_price}</td>
                                <td><button className="btn btn-sm">Small</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
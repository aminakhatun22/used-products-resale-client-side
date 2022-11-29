import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email);
    // console.log(user);

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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">


                {
                    orders.map((order, i) => <div className="card w-96 bg-base-100 shadow-xl  ">
                        <figure><img src={order.img} alt="" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title">
                                {order.Name}
                                <div className="badge badge-secondary btn">pay</div>
                                <div className="badge badge-secondary">${order.resale_price}</div>

                            </h2>


                        </div>
                    </div>)

                }
            </div>
        </div>
    );
};

export default MyOrders;
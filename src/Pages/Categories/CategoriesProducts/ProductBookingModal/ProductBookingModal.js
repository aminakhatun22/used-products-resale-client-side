import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const ProductBookingModal = ({ bookedProduct, setBookedProduct }) => {
    const { Name, seller_name, resale_price, location, img } = bookedProduct;
    const { user } = useContext(AuthContext);
    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;




        const order = {
            name,
            email,
            phone,
            seller_name,
            resale_price,
            location,
            img,
            Name,
            location,
            seller_name,
            resale_price


        }
        // console.log(order);
        fetch('https://quality-consoles-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged
                ) {
                    setBookedProduct(null);
                    toast.success('booking confirmed');
                }

            })





    }
    return (
        <div>



            {/* Put this part before </body> tag */}
            < input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{Name}</h3>

                    <form onSubmit={handleOrder} className=''>
                        <div className='grid gap-2'>
                            <input type="text" placeholder="Type Your Name" defaultValue={user?.displayName} disabled name="name" className="input input-bordered w-full " />
                            <input type="text" placeholder="Type Email Address" defaultValue={user?.email} disabled name="email" className="input input-bordered w-full " />
                            <input type="text" placeholder="Type your Phone" name="phone" className="input input-bordered w-full " />
                            <input type="text" placeholder="Name" name="Name" className="input input-bordered w-full " readOnly />

                            <input type="text" placeholder="seller_name" name="seller_name" className="input input-bordered w-full " readOnly />
                            <input type="text" placeholder="resale_price" name='resale_price' className="input input-bordered w-full " readOnly />
                            <input type="text" placeholder="location" name='location' className="input input-bordered w-full " readOnly />
                            <input type="text" placeholder="img" name='img' className="input input-bordered w-full " readOnly />


                            <br />
                            <input type="submit" value="submit" className="btn bg-orange-400 w-full" />

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ProductBookingModal;
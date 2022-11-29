import React from 'react';
import { Link } from 'react-router-dom';


const CategoriesProduct = ({ product, setBookedProduct }) => {




    const { Name, img, location, original_price, using_time, post_time, seller_name, resale_price } = product;


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center ">
                    <h2 className="card-title">Product: {Name}</h2>
                    <h2 className="card-title">Seller: {seller_name}</h2>

                    <div className='flex card-actions'>
                        <p>Original Price: ${original_price}</p>


                        <p>Resale Price: ${resale_price}</p>

                    </div>
                    <div className="card-actions gap-10 flex">
                        <p className='text-white'>Used: {using_time}</p>
                        <p>Post: {post_time}</p>
                    </div>
                    <h2>Location: {location}</h2>

                    <div className="card-actions gap-10 flex">

                        <label onClick={() => setBookedProduct(product)} className="btn bg-orange-500" htmlFor="order-modal" >Book Now</label>
                        <Link to="/dashboard/mywishlist" className="btn bg-orange-500" htmlFor="order-modal" >WishList</Link>


                    </div>
                </div>
            </div>

        </div >
    );
};

export default CategoriesProduct;
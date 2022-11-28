import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

import CategoriesProduct from './CategoriesProduct';
import ProductBookingModal from './ProductBookingModal/ProductBookingModal';

const CategoriesProducts = () => {
    const [products, setProducts] = useState([]);
    const [bookedProduct, setBookedProduct] = useState(null)

    const data = useLoaderData()
    console.log(data)
    //         const res = await fetch(`https://quality-consoles-server.vercel.app/categoriesProduct?id=${user.uid}`);

    return (
        <div>
            <h2 className='text-center text-3xl text-orange-500 font-bold' >Available Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map(product => <CategoriesProduct key={product._id}
                        product={product}
                        setBookedProduct={setBookedProduct}
                    ></CategoriesProduct>)
                }
            </div>
            {
                bookedProduct &&
                <ProductBookingModal
                    bookedProduct={bookedProduct}
                    setBookedProduct={setBookedProduct}
                ></ProductBookingModal>
            }


        </div>
    );
};

export default CategoriesProducts;
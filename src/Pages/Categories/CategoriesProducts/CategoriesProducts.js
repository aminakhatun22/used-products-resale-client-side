import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import MyWishList from '../../Dashboard/Dashboard/MyWishList/MyWishList';
import CategoriesProduct from './CategoriesProduct';
import ProductBookingModal from './ProductBookingModal/ProductBookingModal';

const CategoriesProducts = () => {
    const [products, setProducts] = useState([]);
    const [bookedProduct, setBookedProduct] = useState(null)
    // wishlist
    const [wishList, setWishList] = useState(null);

    // fetch('http://localhost:5000/wishList', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(wishlist)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if (data.acknowledged
    //         ) {
    //             setWishList(null);
    //             toast.success('booking confirmed');
    //         }

    //     })
    // const { user } = useContext(AuthContext);
    // console.log(user);


    // console.log(products);
    // -------------wishlist-----------




    // useEffect(() => {
    //     // fetch(`https://quality-consoles-server.vercel.app/categoriesProduct?id=${user?._id}`)
    //     fetch('https://quality-consoles-server.vercel.app/categoriesProduct/id')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))

    // }, [])


    const data = useLoaderData()
    console.log(data)

    // const { data: product = [] } = useQuery({
    //     queryKey: ['categoriesProduct', user.uid],
    //     queryFn: async () => {
    //         const res = await fetch(`https://quality-consoles-server.vercel.app/categoriesProduct?id=${user.uid}`);
    //         const data = await res.json();
    //         return data;
    //     }

    // })
    return (
        <div>
            <h2 className='text-center text-3xl text-orange-500 font-bold' >Available Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map(product => <CategoriesProduct key={product._id}
                        product={product}
                        setBookedProduct={setBookedProduct}
                        setWishList={setWishList}></CategoriesProduct>)
                }
            </div>
            {
                bookedProduct &&
                <ProductBookingModal
                    bookedProduct={bookedProduct}
                    setBookedProduct={setBookedProduct}
                ></ProductBookingModal>
            }

            {/* {
                wishList &&
                <MyWishList
                    wishList={wishList}
                    setWishList={setWishList}>

                </MyWishList>

            } */}
        </div>
    );
};

export default CategoriesProducts;
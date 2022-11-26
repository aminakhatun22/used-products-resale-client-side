import React, { useEffect, useState } from 'react';
import CategoriesProduct from './CategoriesProduct';
import ProductBookingModal from './ProductBookingModal/ProductBookingModal';

const CategoriesProducts = () => {
    const [products, setProducts] = useState([]);
    const [bookedProduct, setBookedProduct] = useState(null)
    // console.log(products);



    useEffect(() => {
        fetch('https://quality-consoles-server.vercel.app/categoriesProduct')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div>
            <h2 className='text-center text-3xl text-orange-500 font-bold' >Available Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <CategoriesProduct key={product._id}
                        product={product}
                        setBookedProduct={setBookedProduct}></CategoriesProduct>)
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
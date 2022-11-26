import React, { useEffect, useState } from 'react';
import CategoriesProduct from './CategoriesProduct';

const CategoriesProducts = () => {
    const [products, setProducts] = useState([]);
    console.log(products);


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
                        product={product}></CategoriesProduct>)
                }
            </div>
        </div>
    );
};

export default CategoriesProducts;
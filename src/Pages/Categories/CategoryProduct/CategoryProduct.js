import React, { useEffect, useState } from 'react';
import CategoryProductOption from './CategoryProductOption';

const CategoryProduct = () => {
    const [product, setProduct] = useState([])



    useEffect(() => {
        fetch('/CategoryProduct.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-3xl text-orange-500 font-bold'>
                Available Products </h2>
            <div>
                {
                    product.map((pro, i) => <CategoryProductOption key={i}
                        pro={pro}
                    ></CategoryProductOption>)
                }
            </div>
        </div>
    );
};
export default CategoryProduct;

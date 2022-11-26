import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import CategoryProductOption from './CategoryProductOption';

const CategoryProduct = () => {
    const [product, setProduct] = useState(null);
    const { data: productsOptions = [] } = useQuery({
        queryKey: ['productsOptions'],

        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoriesProduct/Bed Room');
            const data = await res.json();
            console.log(data);
            return data
        }
    });
    return (
        <section>
            <div>
                <h2 className='text-center text-3xl text-orange-500 font-bold'>
                    Available Products </h2>
                <div>
                    {
                        productsOptions.map(product =>
                            <CategoryProductOption key={product._id}
                                product={product}
                                setProduct={setProduct}>

                            </CategoryProductOption>)
                    }
                </div>
            </div>
        </section>
    );
};

export default CategoryProduct;
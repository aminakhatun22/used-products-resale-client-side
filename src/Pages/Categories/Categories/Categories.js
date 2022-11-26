import React, { useEffect, useState } from 'react';
import CategoriesOption from '../CategoriesOption';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/Categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <section className='mt-10'>
            <p className='text-center text-3xl text-orange-500 font-bold'>Our Second Hand Product Categories</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    categories.map(category => <CategoriesOption key={category._id}
                        category={category}></CategoriesOption>)
                }
            </div>

        </section>
    );
};

export default Categories;
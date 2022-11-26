import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesOption = ({ category }) => {
    const { img, name } = category;

    return (
        <div className="card shadow-xl mt-10 ml-10 text-white font-bold">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>

                <div className="card-actions">
                    <Link to={`/categoryproduct/${category.category_name}`}><button className='btn bg-orange-400'>See Details</button></Link>
                </div>
            </div>
        </div >
    );
};

export default CategoriesOption;
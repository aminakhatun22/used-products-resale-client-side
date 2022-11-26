import React from 'react';

const CategoriesProduct = ({ product }) => {
    const { Name, img, location, original_price, using_time, post_time, seller_name, } = product;

    // {"_id":"6381a72a756c9b35a30000ba","Name":"Bed","img":"https://i.ibb.co/wyckNZ9/second-hand-double-bed-500x500.webp","location":"Rajshahi","original-price":30000,"resale-price":10000,"using-time":"5 years","post-time":"12-11-22","seller-name":"Maliha","id":"6381a46f756c9b35a3fd2893"},
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center flex">
                    <h2 className="card-title">Product:{Name}</h2>
                    <h2 className="card-title">{seller_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesProduct;
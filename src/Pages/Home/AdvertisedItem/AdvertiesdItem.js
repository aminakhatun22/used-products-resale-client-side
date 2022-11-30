import React from 'react';

const AdvertisedItem = ({ item
}) => {
    const { img, name
    } = item;

    return (
        <div className="card shadow-xl mt-10 ml-10 text-white font-bold">
            <figure className="px-10 pt-10">
                <img src={img
                } alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name
                }</h2>

                <div className="card-actions">
                    <button className='btn bg-orange-400 text-white'>Advertised</button>
                </div>
            </div>
        </div >
    );
};

export default AdvertisedItem;
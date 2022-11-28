import React, { useEffect, useState } from 'react';
import AdvertisedItem from './AdvertiesdItem';




const AdvertisedItems = () => {
    const [advertisedItem, setAdvertisedItem] = useState([])

    useEffect(() => {
        fetch('https://quality-consoles-server.vercel.app/categoriesProduct')
            .then(res => res.json())
            .then(data => setAdvertisedItem(data))
    }, [])
    return (
        <section className='mt-10'>
            <p className='text-center text-3xl text-orange-500 font-bold'>Advertised Items</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    advertisedItem.map(item => <AdvertisedItem key={item._id}
                        item={item}></AdvertisedItem>)

                }
            </div>

        </section>
    );
};

export default AdvertisedItems;
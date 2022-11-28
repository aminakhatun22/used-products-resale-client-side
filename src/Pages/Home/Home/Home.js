import React from 'react';
import Banner from '../../Banner/Banner';
import Categories from '../../Categories/Categoris/Categories';
import AdvertisedItems from '../AdvertisedItem/AdvertisedItems';
import ExtraSection from '../ExtraSection/ExtraSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertisedItems></AdvertisedItems>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;
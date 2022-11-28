import React from 'react';
import { Link } from 'react-router-dom';

const ExtraSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-16 ml-10 mr-10'>
            <div className="hero h-96 " style={{ backgroundImage: `url("https://i.ibb.co/BV1T5Qb/banner-image-16.jpg")` }}>
                <div className="hero-overlay bg-opacity-200"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <p className="mb-5  font-bold">10% OFF ALL ITEMS</p>
                        <p className="mb-5 text-3xl">Leave the season with frunob styles</p>
                        <Link to="/blog" >see blog</Link>
                    </div>
                </div>
            </div>
            <div className="hero " style={{ backgroundImage: `url("https://i.ibb.co/cXwsWM2/banner-image-17.jpg")` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <p className="mb-5  font-bold">10% OFF ALL ITEMS</p>
                        <p className="mb-5 text-3xl">Decorate your life with art</p>
                        <Link to="/blog" >see blog</Link>
                    </div>
                </div>
            </div>
            <div className="hero " style={{ backgroundImage: `url("https://i.ibb.co/T08x8sc/banner-image-18.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <p className="mb-5  font-bold">10% OFF ALL ITEMS</p>
                        <p className="mb-5 text-3xl">Best furniture at the afortable price </p>
                        <Link to="/blog" >see blog</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;
import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/zr5tx8Y/wepik-photo-mode-20221024-105820.png")` }}>
            <div className="hero-overlay bg-opacity-40 "></div>
            <div className="hero-content text-center  text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-orange-400">Hello there</h1>
                    <p className="mb-5 text-white font-bold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
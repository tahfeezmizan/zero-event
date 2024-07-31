import React from 'react';
import bannerBg from '../../../public/slider.jpg';

const Banner = () => {
    return (
        <div
            className='-mt-16'
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bannerBg.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container mx-auto px-4 h-screen flex flex-col items-center justify-center text-white">
                <h1 className="text-7xl font-black pb-2">Event Planner</h1>
                <p className="text-base tracking-[6px] mb-7">EVERY EVENT SHOULD BE PERFECT</p>
                <button className='text-white font-Roboto text-base uppercase bg-transparent border-2 border-yellow-500 rounded-full py-3 px-6 font-bold hover:bg-yellow-500 duration-300'>get started!</button>
            </div>
        </div>
    );
};

export default Banner;

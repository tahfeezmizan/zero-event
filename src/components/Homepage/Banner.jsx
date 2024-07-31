"use client";

import React, { useState, useEffect, useRef } from 'react';
import bannerBg from '../../../public/slider.jpg';

const Banner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

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
                
                <div className="flex items-center justify-center gap-7">
                    <button className='bg-gradient-to-r from-[#ffbe30] to-[#ff5007] text-white font-Roboto text-base uppercase rounded-full py-2 px-6 font-bold hover:bg-yellow-500 duration-300'>get started!</button>
                   
                    <button
                        className='text-white font-Roboto text-base uppercase bg-transparent border-2 border-yellow-500 rounded-full py-2 px-6 font-bold hover:bg-yellow-500 duration-300'
                        onClick={openModal}
                    >
                        Upcoming Events
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div ref={modalRef} className="bg-white rounded-lg p-6 text-black">
                        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
                        <p>Here is some information about upcoming events...</p>
                        <button
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Banner;

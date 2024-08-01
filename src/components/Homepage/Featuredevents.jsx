"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";

const Featuredevents = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(data => {
                console.log(data.data);
            })
    }, [])


    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
            <div className="text-center mb-14">
                <h2 className="text-5xl font-black font-Roboto mb-3">Featured Events</h2>
                <p className="text-base font-OpenSans">You can choose display Featured, Upcoming, Past, Creation Date here</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="col-span-1">
                    <div className="border rounded-md relative">
                        <p className="absolute top-5 left-4 w-16 h-16 rounded-lg text-base font-Roboto p-3 z-10 text-center font-bold leading-5 bg-gradient-to-r from-[#ffbe30] to-[#ff5007] text-white">25 July</p>
                        <div className="w-full h-[334px] overflow-hidden">
                            <img className="w-full h-full object-cover " src='https://i.ibb.co/6F8MJTY/image-9.jpg' alt="" />
                        </div>
                        <div className="mt-10  pb-5">
                            <h2 className="text-[#373737] text-base font-Roboto font-semibold pl-3 mb-4">How to become an entrepreneur ...</h2>
                            <p className="text-[#373737] text-base font-OpenSans pl-3 pr-8 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mae...</p>

                            <p className="flex items-center gap-3 pl-3 text-yellow-500 text-base
                            font-OpenSans mb-4"><IoLocationOutline /><span className='text-[#373737] '>Bangladesh</span></p>

                            <div className="flex items-center border-t-2 justify-between font-OpenSans px-3 pt-2">
                                <p className="bg-gray-200 px-3 py-1 rounded-2xl font-OpenSans font-semibold text-base hover:bg-gradient-to-r hover:from-[#ffbe30] hover:to-[#ff5007] hover:text-white">get ticket </p>
                                <p className="text-base ">Upcoming</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featuredevents;
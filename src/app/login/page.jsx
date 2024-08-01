"use client";

import React, { useState } from 'react';
import singUpImg from '../../../public/login-bg.jpg';
import Link from 'next/link';

const Loginpage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Reset form
        setFormData({
            email: '',
            password: ''
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 -mt-16'>
            <div className="grid grid-cols-1 lg:grid-cols-2 border rounded-2xl overflow-hidden shadow-xl max-w-5xl w-full">
                <div className="col-span-1 flex items-center justify-center" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${singUpImg.src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    {/* Image background */}
                </div>
                <div className="col-span-1 flex items-center justify-center">
                    <div className="py-16 px-10 w-full">
                        <h2 className="text-4xl text-center font-Roboto font-bold mb-8">Login</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-0 px-3 flex items-center text-sm leading-5"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-3 text-center bg-gradient-to-r from-[#ffbe30] to-[#ff5007] text-white font-Roboto text-base uppercase rounded-full font-bold hover:bg-yellow-500 duration-300"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <p className="text-lg font-OpenSans font-semibold text-center pt-6">Need an Account? <Link className='' href={`/singup`}>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;

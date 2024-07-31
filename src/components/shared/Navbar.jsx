"use client"
import Link from 'next/link';
import { RxCross2 } from "react-icons/rx";
import { RiMenu3Fill, RiSearchLine } from "react-icons/ri";
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
    const [isClick, setIsclick] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const pathName = usePathname();
    const route = useRouter();

    const toggleNavbar = () => {
        setIsclick(!isClick)
    }

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    }

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log(searchText);
        setSearchText('');
        setIsSearchOpen(false);
    }

    const links = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'About',
            href: '/about'
        },
        {
            title: 'Dashboard',
            href: '/dashboard'
        },
        {
            title: 'Services',
            href: '/services'
        },
        {
            title: 'Blogs',
            href: '/blogs'
        },
    ]

    const handleLogin = () => {
        route.push('/login')
    }

    if (pathName.includes("dashboard"))
        return (
            <div className='bg-cyan-500 p-3 text-white'>
                <nav className="flex justify-between">
                    <h3 className="text-3xl">Dashboard</h3>

                    <ul className="flex gap-4 items-center ">
                        <li>Manage User</li>
                        <li>Manage Properties</li>
                    </ul>

                </nav>
            </div>
        )

    return (
        <nav className="bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center ">
                        <div className="flex-shrink-0">
                            <a href="/" className="text-white text-2xl">
                                Logo
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="ml-4 flex justify-center items-center space-x-6">
                            {
                                links.map((link, index) => (
                                    <Link key={index} className={` ${pathName === link.href ? 'text-red-500 font-medium' : "text-white font-medium"} `} href={link.href}>{link.title}</Link>
                                ))
                            }

                            <div className="">
                                <form onSubmit={handleSearchSubmit} className="relative">
                                    {isSearchOpen && (
                                        <input
                                            type="text"
                                            value={searchText}
                                            onChange={handleSearchChange}
                                            className="px-3 py-1 outline-none bg-white text-black rounded-sm"
                                            placeholder="Search..."
                                        />
                                    )}
                                    <button type="button" onClick={toggleSearch} className="absolute -top-2 bottom-0 -left-2">
                                        <RiSearchLine className="text-white text-2xl" />
                                    </button>
                                </form>
                            </div>

                            <button onClick={handleLogin} className='text-white py-1 px-3'>Login</button>
                        </div>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button
                            className="inline-flex items-center justify-center p-2 text-3xl rounded-md text-white md:text-white hover:text-white focus:outline-none transition ease-in-out focus:ring-inset focus:ring-white"
                            onClick={toggleNavbar}
                        >
                            {
                                isClick ? (
                                    <RxCross2 />
                                ) : (
                                    <RiMenu3Fill />
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="lg:hidden flex flex-col items-center space-y-3 py-4">
                    {
                        links.map((link, index) => (
                            <Link key={index} className={` ${pathName === link.href ? 'text-red-500 font-medium' : "text-white font-medium"} `} href={link.href}>{link.title}</Link>
                        ))
                    }
                    <button onClick={handleLogin} className='text-white py-1 px-3'>Login</button>
                    <form onSubmit={handleSearchSubmit} className="relative w-full flex justify-center">
                        {isSearchOpen && (
                            <input
                                type="text"
                                value={searchText}
                                onChange={handleSearchChange}
                                className="pl-2 pr-8 py-1 bg-white text-black rounded-md w-3/4"
                                placeholder="Search..."
                            />
                        )}
                        <button type="button" onClick={toggleSearch} className="absolute pb-5">
                            <RiSearchLine className="text-white text-2xl" />
                        </button>
                    </form>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

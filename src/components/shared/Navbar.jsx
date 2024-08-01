"use client";
import Link from 'next/link';
import { RxCross2 } from "react-icons/rx";
import { RiMenu3Fill, RiSearchLine } from "react-icons/ri";
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isClick, setIsclick] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [navbarBackground, setNavbarBackground] = useState('transparent');
    const pathName = usePathname();
    const router = useRouter();

    const toggleNavbar = () => {
        setIsclick(!isClick);
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

    useEffect(() => {
        const handleScroll = () => {
            if (pathName === '/signup') {
                setNavbarBackground('#333333');
            } else if (pathName === '/login') {
                setNavbarBackground('#333333')
            }
            else if (window.scrollY > 50) {
                setNavbarBackground('#333333');
            } else {
                setNavbarBackground('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathName]);

    useEffect(() => {
        if (pathName === '/signup' || pathName === '/login') {
            setNavbarBackground('#333333');
        } else {
            setNavbarBackground('transparent');
        }
    }, [pathName]);

    const links = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Events', href: '/events' },
        { title: 'Blogs', href: '/blogs' },
        { title: 'Contact', href: '/contact' },
    ];

    const handleLogin = () => {
        router.push('/login');
    };

    return (
        <nav className={`sticky top-0 z-10 transition-colors duration-300 ease-in-out`} style={{ backgroundColor: navbarBackground }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-white text-2xl font-Roboto font-bold">
                                Zero Events
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="ml-4 flex justify-center items-center space-x-7">
                            {links.map((link, index) => (
                                <Link
                                    key={index}
                                    className={`${pathName === link.href
                                        ? 'bg-gradient-to-r from-[#ffbe30] to-[#ff5007] text-white font-Roboto text-base px-2 py-1 font-semibold'
                                        : 'text-white font-medium'
                                        } hover:bg-gradient-to-r hover:from-[#ffbe30] hover:to-[#ff5007] hover:text-white hover:px-2 hover:py-1 duration-500 transition-colors`}
                                    href={link.href}
                                >
                                    {link.title}
                                </Link>
                            ))}
                            <div>
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
                            <button onClick={handleLogin} className="text-white font-Roboto text-base px-2 py-1 font-semibold hover:bg-gradient-to-r hover:from-[#ffbe30] hover:to-[#ff5007] hover:text-white hover:px-2 hover:py-1 duration-500 transition-colors">Login</button>
                        </div>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button
                            className="inline-flex items-center justify-center p-2 text-3xl rounded-md text-white hover:text-white focus:outline-none transition ease-in-out focus:ring-inset focus:ring-white"
                            onClick={toggleNavbar}
                        >
                            {isClick ? <RxCross2 /> : <RiMenu3Fill />}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="absolute left-0 right-0 lg:hidden bg-[#333333] flex flex-col items-center space-y-3 py-4 transition-all duration-300 ease-in-out">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            className={`${pathName === link.href ? 'bg-gradient-to-r from-[#ffbe30] to-[#ff5007] text-white font-Roboto text-base px-2 py-1 font-semibold' : 'text-white font-medium'
                                } hover:bg-gradient-to-r hover:from-[#ffbe30] hover:to-[#ff5007] hover:text-white transition-colors`}
                            href={link.href}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <button onClick={handleLogin} className="text-white py-1 px-3">Login</button>
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

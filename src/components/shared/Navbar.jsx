"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const route = useRouter()

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

    const HandleLogin = () => {
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
        <div className="w-4/5 mx-auto py-7 text-lg">
            <nav className="flex justify-between">
                <h3 className="text-3xl">NextApp</h3>
                <ul className="flex gap-4 items-center ">
                    {
                        links.map((link) => <Link className={`${pathName === link.href && 'text-red-500 font-medium'}`} href={link.href}>{link.title}</Link>)
                    }
                    <button onClick={HandleLogin} className='bg-black text-white py-1 px-3'>Login</button>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;
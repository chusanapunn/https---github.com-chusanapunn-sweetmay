"use client";

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [currentPageTitle, setCurrentPageTitle] = useState('sweetmay');
    const currentPage = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const pageTitles: { [key: string]: string } = {
        '/': '',
        '/-': '@ -',
        '/sweetmay': '@ sweetmay',
        '/sweetcraft': '@ sweetcraft',
        '/sweetplant': '@ sweetplant',
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log("Toggle Hamburger menu");
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { // Assuming 1024px is your breakpoint for lg
                setIsOpen(false);
            }
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="px-4">
            <div className="flex justify-between items-center">
                <div className="flex">
                    <h1 className="text-xl drop-shadow-xl tracking-wider">
                        <Link href="/" className="hover:text-gray-400 hover:animate-pulse text-sm  ">
                            Sweetmay Studio
                        </Link>
                    </h1>

                    <h1 className="tracking-widest mt-2 ml-4">
                        {pageTitles[currentPage]}
                    </h1>
                </div>

                {/* Hamburger Icon */}
                <button
                    onClick={toggleMenu}
                    className="block focus:outline-none ml-auto lg:hidden"
                >
                    <svg
                        className="w-6 h-6 hover:animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg> 
                </button>

                {/* Navigation Links */}
                <ul
                    className={`drop-shadow-sm lg:flex lg:space-x-4 tracking-widest font-thin text-xl
                    ${isOpen ? 'ease-out absolute top-10 left-0 w-full flex flex-col space-y-2 z-50' : 'hidden'}
                    lg:visible lg:h-auto lg:w-auto lg:relative`}
                >
                    <li className={`text-right mr-4 ${currentPage === '/sweetmay' ? 'text-white' : 'text-gray-500'}`}>
                        <Link href="/sweetmay" className="hover:text-gray-400">
                            SweetMay
                        </Link>
                    </li>

                    <li className={`text-right mr-4 ${currentPage === '/sweetcraft' ? 'text-white' : 'text-gray-500'}`}>
                        <Link href="/sweetcraft" className="hover:text-gray-400">
                            SweetCraft
                        </Link>
                    </li>

                    <li className={`text-right mr-4 ${currentPage === '/sweetplant' ? 'text-white' : 'text-gray-500'}`}>
                        <Link href="/sweetplant" className="hover:text-gray-400">
                            SweetPlant
                        </Link>
                    </li>
                </ul>
                
            </div>
            <hr
                className={`mt-2 invisible ${isOpen ? 'pb-32' : ''}`}
            />
        </header>
    );
}

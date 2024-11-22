"use client";

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { FaInstagram, FaLine } from 'react-icons/fa'; // Import Line and Instagram icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const currentPage = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        console.log(session);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        
        

    }, [session]);

    return (
        <footer className="relative bg-orange-50">
            <div className="flex justify-between items-center font-thin font-serif px-4 py-2">

                <div className="flex text-gray-400">
                    <h1 className="text-2xl tracking-wider">
                        {session ? (
                            <Link href="/myaccount" className="hover:text-gray-400 text-xl">
                                {
                                `Hello, ${session.user?.name || 'User'}`}
                            </Link>
                        ) : (
                            <Link href="/register" className="hover:text-gray-400 text-xl">
                                Guest
                            </Link>
                        )}

                    </h1>

                </div>
                <div className="flex text-md rounded-xl bg-gray-100 p-2">
                    <Link href="https://lin.ee/81x9GA3">
                         {/* LINE Official */}
                         <FaLine className="text-xl text-green-500" /> {/* LINE icon */}

                    </Link>
                </div>
                <div className="flex text-md rounded-xl bg-gray-100 p-2">
                    <Link href="https://www.instagram.com/invites/contact/?igsh=yqj8hytynosc&utm_content=3gomaqc">
                        {/* Instagram */}
                        <FaInstagram className="text-xl text-violet-600" /> {/* Instagram icon */}

                    </Link>
                </div>
                <div className="flex text-md rounded-xl bg-gray-100 p-2">
                    <Link href="https://static.robinhood.in.th/app_link.html?URI=robinhoodth://merchantlanding/id/62654">
                        {/* Robinhood with feather icon */}
                        <FontAwesomeIcon icon={faFeather} className="text-xl text-purple-700" /> {/* Feather icon */}
                    </Link>
                </div>
                <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
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
                    className={`bg-orange-50 absolute bottom-full left-0 w-full py-4 space-y-4 text-right z-49 text-gray-400
                    ${isOpen ? 'block' : 'hidden'} lg:relative lg:flex-row lg:bg-transparent lg:p-0 lg:w-auto lg:space-y-0`}
                >
                    {session ? (
                        <li className="text-right pr-5">
                            <button onClick={() => signOut()} className="hover:text-gray-400">
                                Logout
                            </button>
                        </li>
                    ) : (
                        <>
                            <li className="text-right pr-5 ">
                                <Link href="/register" className="hover:text-gray-400">
                                    Create an Account
                                </Link>
                            </li>
                            <li className="text-right pr-5">
                                <Link href="/login" className="hover:text-gray-400">
                                    Login
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
               
            </div>
             <p className="font-serif text-center pb-4">tel: (+66) 0886947829 (K.May)</p>
        </footer>
    );
}

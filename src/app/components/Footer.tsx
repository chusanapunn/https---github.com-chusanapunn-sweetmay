"use client";

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

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
        <footer className="relative">
            <div className="flex justify-between items-center font-thin font-serif px-4 py-2">
                <div className="flex">
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
                    className={`absolute bottom-full left-0 w-full py-4 space-y-4 text-right z-50 
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
                            <li className="text-right pr-5">
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
        </footer>
    );
}
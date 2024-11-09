// app/sweetmay/page.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import  AuthError  from "next-auth";


const LoginPage = () => {
    const {data:session} = useSession();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);  // Loading state for feedback
    const router = useRouter();

    // already login
//     useEffect(() => {
//     if (session) {  
//       router.push('/myaccount');
//       return null;  // Prevent component from rendering while redirecting
//     }
// },[session, router]);

    const handleLogin = async (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (result?.error) {
            setError(result.error);
        } else {
            router.push('/myaccount');
        }
        setLoading(false);
    };

    return (
        <div className="p-2 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full mx-4">
                <h1 className="text-2xl font-semibold mb-6 text-gray-800">Login</h1>

                {error && 
                  <p className="text-red-500 mb-4">
                  {error}
                  </p>}
                <form onSubmit={handleLogin}>
                    <label className="block text-gray-700 mb-2">E-mail:</label>
                    <input
                        className="block w-full rounded-lg p-2 mb-4 bg-orange-50 text-gray-700"
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="block text-gray-700 mb-2">Password:</label>
                    <input
                        className="block w-full rounded-lg p-2 mb-4 bg-orange-50 text-gray-700"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full text-white bg-orange-500 hover:bg-orange-400 rounded-lg p-2"
                    >                        
                    {loading ? 'Logging in...' : 'Confirm'}  {/* Show loading state */}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

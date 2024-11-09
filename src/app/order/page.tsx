// app/sweetmay/page.tsx

"use client"
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import { useRouter } from 'next/compat/router';

const OrderPage = () => {
    const [images, setImages] = useState([]);
    const router = useRouter();

    // useEffect(() => {
    //     const fetchImages = async () => {
    //         const response = await fetch('/api/db');
    //         const data = await response.json();
    //         setImages(data);
    //     };

    //     fetchImages();
    // }, []);
    //     const handleClick = (id: number) => {
    //         router.push(`/sweetmay/${id}`);
    //     };

    return (
        <div>
          

        </div>
    );
};

export default OrderPage;

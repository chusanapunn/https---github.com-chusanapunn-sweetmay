// app/sweetmay/page.tsx

"use client"
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import { useRouter } from 'next/compat/router';
import HSection from '../components/HSection';

const SweetCraftHomePage = () => {
    const [images, setImages] = useState([]);
    const router = useRouter();

    // useEffect(() => {
    //     const fetchImages = async () => {
    //         const response = await fetch('/api/images');
    //         const data = await response.json();
    //         setImages(data);
    //     };

    //     fetchImages();
    // }, []);
    //     const handleClick = (id: number) => {
    //         router.push(`/sweetcraft/${id}`);
    //     };

    return (
        <div>
{/* <HSection
        title="Sweetcraft"
        bgImage="/craftCover.png"
        items={[
          { title: 'Pastry', link:'/pastry', subtitle: 'ขนมอบ', image: "/LINE_ALBUM_F.jpg", 
          categories :[
            {title:"Pound Cake", image: "LINE_ALBUM_F.jpg"},
            {title:"Individual Cake", image: "LINE_ALBUM_F.jpg"},
            {title:"Cookies", image: "LINE_ALBUM_F.jpg"},
            {title:"Snack", image: "LINE_ALBUM_F.jpg"},]} ,
          { title: 'Bakery', link:'/pastry', subtitle: 'ขนมปัง', image: "/LINE_ALBUM_Sourdough_241021_1.jpg", 
          categories :[
            {title:"Sourdough", image: "LINE_ALBUM_F.jpg"},
            {title:"Focaccia", image: "LINE_ALBUM_F.jpg"},
            {title:"Milk Loaf", image: "LINE_ALBUM_F.jpg"},
            {title:"Baguette", image: "LINE_ALBUM_F.jpg"},] },
          { title: 'Cuisine', link:'/pastry', subtitle: 'ครัวอาหาร', image: "/530797936574464353.jpg", 
          categories :[
            {title:"Thai Cuisine", image: "LINE_ALBUM_F.jpg"},
            {title:"French Cuisine", image: "LINE_ALBUM_F.jpg"},
            {title:"Italian Cuisine", image: "LINE_ALBUM_F.jpg"},
            ] },
        ]}
      /> */}
        </div>
    );
};

export default SweetCraftHomePage;

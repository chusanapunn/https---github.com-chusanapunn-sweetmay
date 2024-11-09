// app/sweetmay/page.tsx

"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/compat/router';
import CategoryBar from '../components/CategoryBar';
import Menutab from "../components/menutab";

const SweetmayHomePage = () => {
    const [images, setImages] = useState<{image_url:string}[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch('/api/images');
            const data = await response.json();
            setImages(data);
        };

        fetchImages();
    }, []);

    return (
        <div className="flex flex-col justify-between overflow-hidden bg-no-repeat bg-cover bg-bottom drop-shadow-xl">
            <div className="transition duration-300 ease-in-out">
                <div className="inner-shadow">
                    <h1 className="p-8 transition duration-300 tracking-widest text-3xl sm:text-4xl md:text-6xl">
                        Sweetmay
                    </h1>
                    <CategoryBar
                        title="Sweetmay"
                        link="/sweetmay"
                        // bgImage={images[0]}
                        items={[
                            { title: 'Seasonal' },
                            { title: 'Pastry' },
                            { title: 'Bakery' },
                            { title: 'Cuisine' },
                        ]}
                    />
                    <Menutab
                        title="Fruit Cake"
                        items={[
                            {
                                title: "Fruit Cake (S)",
                                desc: "Small Fruit Cake",
                                price: "500 Baht",
                                image: images[1] ? images[1].image_url : "",
                            },
                            {
                                title: "Fruit Cake (L)",
                                desc: "Large Fruit Cake.",
                                price: "1000 Baht",
                                image: images[4] ? images[4].image_url : "",
                            },
                            {
                                title: "Soft Cookies",
                                desc: "Rich Soft Cookies. Price is per piece.",
                                price: "65 Baht",
                                image: images[2] ? images[2].image_url : "",
                            },
                            {
                                title: "Cranberry Cookies",
                                desc: "Sweet Cranberry Cookies for diet.",
                                price: "200 Baht",
                                image: images[3] ? images[3].image_url : "",
                            },
                            {
                                title: "Caramel Cornflakes",
                                desc: "Caramel Cornflakes with cranberries, nuts.",
                                price: "180 Baht",
                                image: images[5] ? images[5].image_url : "",
                            },
                            {
                                title: "Coffee Almond Meringue",
                                desc: "Super Coffee Time Snack.",
                                price: "180 Baht",
                                image: images[6] ? images[6].image_url : "",
                            },
                            {
                                title: "Sacher",
                                desc: "Sacher Chocolate cake, 2 pound size.",
                                price: "1600 Baht",
                                image: images[7] ? images[7].image_url : "",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default SweetmayHomePage;

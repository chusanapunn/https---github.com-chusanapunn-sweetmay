// app/sweetmay/page.tsx

"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/compat/router';
import CategoryBar from '../components/CategoryBar';
import Menutab from "../components/menutab";

const SweetmayHomePage = () => {
    const [images, setImages] = useState<{image_url:string}[]>([]);
    const router = useRouter();

    // useEffect(() => {
    //     const fetchImages = async () => {
    //         const response = await fetch('/api/images');
    //         const data = await response.json();
    //         setImages(data);
    //     };

    //     fetchImages();
    // }, []);

    return (
        <div className="flex flex-col justify-between overflow-hidden bg-no-repeat bg-cover bg-bottom drop-shadow-xl">
            <div className="transition duration-300 ease-in-out">
                <div className="inner-shadow">

                    <CategoryBar
                        title="Sweetmay"
                        link="/sweetmay"
                        // bgImage={images[0]}
                        items={[
                            { title: 'Winter 2024 Menu' },
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
                                thtitle: "ฟรุตเค้ก (เล็ก)",
                                desc: "Small Fruit Cake",
                                price: "500 Baht",
                                image: "/1_fruitcake_S.jpg"
                                // image: images[1] ? images[1].image_url : "",
                            },
                            {
                                title: "Fruit Cake (L)",
                                thtitle: "ฟรุตเค้ก (ใหญ่)",
                                desc: "Large Fruit Cake.",
                                price: "1000 Baht",
                                image: "/2_fruitcake_M.jpg"

                                // image: images[4] ? images[4].image_url : "",
                            },
                            {
                                title: "Soft Cookies (Milk/ White)",
                                thtitle: "คุ้กกี้นิ่ม (ธรรมดา/ไวท์ชอค) (ชิ้น)",
                                desc: "Rich Soft Cookies. Price is per piece.",
                                price: "65 Baht",
                                image: "/3_soft_cookies.jpg"

                                // image: images[2] ? images[2].image_url : "",
                            },
                            {
                                title: "Cranberry Cookies",
                                thtitle: "คุ้กกี้เเครนเบอรรี่",
                                desc: "Sweet Cranberry Cookies for diet.",
                                price: "200 Baht",
                                image: "/4_cran_cookies.jpg"

                                // image: images[3] ? images[3].image_url : "",
                            },
                            {
                                title: "Caramel Cornflakes",
                                thtitle: "คาราเมลคอร์นเฟลก",
                                desc: "Caramel Cornflakes with cranberries, nuts.",
                                price: "180 Baht",
                                image: "/5_caramel_cornflakes.jpg"

                                // image: images[5] ? images[5].image_url : "",
                            },
                            {
                                title: "Coffee Almond Meringue",
                                thtitle: "เมอเเรงอัลมอนด์กาเเฟ",
                                desc: "Super Coffee Time Snack.",
                                price: "180 Baht",
                                image: "/coffee_meringue.jpg"

                                // image: images[6] ? images[6].image_url : "",
                            },
                            {
                                title: "Sacher",
                                thtitle: "ซาเชอร์ช๊อคโกเเลต",
                                desc: "Sacher Chocolate cake, 2 pound size.",
                                price: "1600 Baht",
                                image: "/7_saucher2pnd.jpg"

                                // image: images[7] ? images[7].image_url : "",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default SweetmayHomePage;

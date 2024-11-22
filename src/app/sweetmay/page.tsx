// app/sweetmay/page.tsx

"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/compat/router';
import CategoryBar from '../components/CategoryBar';
import Menutab from "../components/menutab";

const SweetmayHomePage = () => {
    const [images, setImages] = useState<{image_url:string}[]>([]);
    const router = useRouter();

    const [activeIndex, setActiveIndex] = useState(0);

    const categories = [
      { title: "Winter 2024" },
      { title: "Pastry" },
      { title: "Bakery" },
      { title: "Cuisine" },
    ];
  

    const menuitems = [
        [ // WINTER2024
            {
              title: "Fruit Cake (S)",
              thtitle: "ฟรุตเค้ก (เล็ก)",
              desc: "Small Fruit Cake",
              price: "500 Baht",
              image: "/1_fruitcake_S.jpg",
            },
            {
              title: "Fruit Cake (L)",
              thtitle: "ฟรุตเค้ก (ใหญ่)",
              desc: "Large Fruit Cake",
              price: "1000 Baht",
              image: "/2_fruitcake_M.jpg",
            },

            {
              title: "Soft Cookies (Milk/ White)",
              thtitle: "คุ้กกี้นิ่ม (ธรรมดา/ไวท์ชอค) (ชิ้น)",
              desc: "Rich Soft Cookies. Price is per piece.",
              price: "65 Baht",
              image: "/3_soft_cookies.jpg",
            },
            {
              title: "Cranberry Cookies",
              thtitle: "คุ้กกี้เเครนเบอรรี่",
              desc: "Sweet Cranberry Cookies for diet.",
              price: "200 Baht",
              image: "/4_cran_cookies.jpg",
            },
            {
              title: "Caramel Cornflakes",
              thtitle: "คาราเมลคอร์นเฟลก",
              desc: "Caramel Cornflakes with cranberries, nuts.",
              price: "180 Baht",
              image: "/5_caramel_cornflakes.jpg",
            },
            {
              title: "Coffee Almond Meringue",
              thtitle: "เมอเเรงอัลมอนด์กาเเฟ",
              desc: "Super Coffee Time Snack.",
              price: "180 Baht",
              image: "/coffee_meringue.jpg",
            },
            {
              title: "Sacher",
              thtitle: "ซาเชอร์ช๊อคโกเเลต",
              desc: "Sacher Chocolate cake, 2 pound size.",
              price: "1600 Baht",
              image: "/7_saucher2pnd.jpg",
            },
          ],
          [       // PASTRY
            {
            title: "Pastry1",
            thtitle: "เพสทรี1",
            desc: "Super Coffee Time Snack.",
            price: "- Baht",
            image: "",
          },
          {
            title: "Pastry2",
            thtitle: "เพสทรี2",
            desc: "Super Coffee Time Snack.",
            price: "- Baht",
            image: "",
          },
          {
            title: "Pastry3",
            thtitle: "เพสทรี3",
            desc: "Super Coffee Time Snack.",
            price: "- Baht",
            image: "",
          },
          
        ],
        [       // BAKERY
            {
            title: "Focaccia",
            thtitle: "ฟอคัซเซีย",
            desc: "Super Coffee Time Snack.",
            price: "- Baht",
            image: "",
          },
          
        ],
        [       // Cuisine
            {
            title: "cuisine1",
            thtitle: "อาหารคาว1",
            desc: "Super Coffee Time Snack.",
            price: "- Baht",
            image: "",
          },

        ]
    ];
    

    return (
        <div className="flex flex-col justify-between overflow-hidden bg-no-repeat bg-cover bg-bottom drop-shadow-xl">
            <div className="transition duration-300 ease-in-out">
                <div className="inner-shadow">

                    <CategoryBar
                        title="Sweetmay"
                        link="/sweetmay"
                        // bgImage={images[0]}
                        items={categories}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />
                    <Menutab
                        title={categories[activeIndex]?.title}
                        items={menuitems[activeIndex]}
                    />
                </div>
            </div>
        </div>
    );
};

export default SweetmayHomePage;

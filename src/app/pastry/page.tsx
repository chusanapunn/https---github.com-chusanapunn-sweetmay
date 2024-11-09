// app/sweetmay/page.tsx

"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const PastryPage = () => {
    const [bgImage, setBgImage] = useState('/craftCover.png');

    // const handleBgChange = (newImage) => {
    //   setBgImage(newImage);
    // };
  
    return (
        <div className="relative">
          {/* Page Title and Navigation */}
          <div className="flex justify-between items-center p-4">
            <Link href="/sweetmay">
              <div className="rounded-md bg-orange-200/75 hover:bg-orange-950/50 p-4 cursor-pointer">
                Back to Sweetmay
              </div>
            </Link>
            <div className="text-center pr-12">
              <h1 className="text-4xl font-semibold ">Pastry</h1>
              <p className="text-xl text-orange-300 ">ขนมอบ</p>
            </div>
          </div>
        <hr className= "bg-black"/>
        
        {/* Background and Overlay */}
        <div 
          className="relative bg-cover bg-center  p-4"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 pointer-events-none"></div> {/* Set pointer-events to none */}

          {/* Content Sections */}
          <div className="relative flex gap-4 p-4 z-10">
            {/* Left Section */}
            {/* <div className="flex flex-col gap-4 bg-orange-200/30 p-4 rounded-md">
              <div onClick={() => handleBgChange('/LINE_ALBUM_C.jpg')} className="bg-orange-200/25 hover:bg-orange-200/75 p-4 rounded-md cursor-pointer">
                <h1 className="text-md">Pound Cake</h1>
                <p>เค้กปอนด์ 2 ปอนด์</p>
              </div>
              <div onClick={() => handleBgChange('/LINE_ALBUM_D.jpg')} className="bg-orange-200/25 hover:bg-orange-200/75 p-4 rounded-md cursor-pointer">
                <h1 className="text-md">Individual Cake</h1>
                <p>เค้กชิ้น</p>
              </div>
              <div onClick={() => handleBgChange('/LINE_ALBUM_Sweetmay_241019_1.jpg')} className="bg-orange-200/25 hover:bg-orange-200/75 p-4 rounded-md cursor-pointer">
                <h1 className="text-md">Cookies</h1>
                <p>คุกกี้</p>
              </div>
              <div onClick={() => handleBgChange('/LINE_B.jpg')} className="bg-orange-200/25 hover:bg-orange-200/75 p-4 rounded-md cursor-pointer">
                <h1 className="text-md">Snack</h1>
                <p>ขนมทานเล่น</p>
              </div> */}
            </div>
  
            {/* Right Section */}
            {/* <div className="grid grid-flow-col h-full gap-4 bg-orange-200/30 p-2 rounded-md">
              <div onClick={() => handleBgChange('/LINE_ALBUM_C.jpg')} className="bg-orange-200/25 hover:bg-orange-200/75 p-4 rounded-md cursor-pointer">
                <h1 className="text-md">Chocolate Mousse Cake</h1>
                <p>เค้กมูสช๊อคโกเเลต</p>
                <p>1000 บาท</p>
              </div>
              <div onClick={() => handleBgChange('/LINE_ALBUM_D.jpg')} className="bg-orange-200/25 hover:bg-orange-200/75 p-4 rounded-md cursor-pointer">
                <h1 className="text-md">Individual Cake</h1>
                <p>เค้กมูสช๊อคโกเเลต</p>
                <p>1000 บาท</p>
              </div>
              <div onClick={() => handleBgChange('/LINE_ALBUM_Sweetmay_241019_1.jpg')} className="bg-orange-200/25 hover:bg-orange-200/75 p-4 rounded-md cursor-pointer">
                <h1 className="text-md">Cookies</h1>
                <p>เค้กมูสช๊อคโกเเลต</p>
                <p>1000 บาท</p>
              </div>
              <div onClick={() => handleBgChange('/LINE_B.jpg')} className="bg-orange-200/25 hover:bg-orange-200/75 p-4 rounded-md cursor-pointer">
                <h1 className="text-md">Snack</h1>
                <p>เค้กมูสช๊อคโกเเลต</p>
                <p>1000 บาท</p>
              </div> */}
            </div>
          </div>
        // </div>
      // </div>
    );
};

export default PastryPage;

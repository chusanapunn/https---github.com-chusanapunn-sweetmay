// Menutab.tsx

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {FaSpinner} from 'react-icons/fa';

interface MenuTabProps {
  title: string;
  items: {
    title: string;
    desc: string;
    price: string;
    image?: string;
  }[];
}

const Menutab: React.FC<MenuTabProps> = ({ title, items }) => {
  // State to keep track of the currently visible item
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Function to handle tab click and change active item
  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setLoading(true);
  };

  return (
    <div className="flex flex-col px-12 space-y-4">

      {/* Render tab buttons */}
      <div className="flex justify-center space-x-4 text-2xl">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-2 hover:text-gray-600 ${
              activeIndex === index ? "underline decoration-3 " : ""
            } rounded transition`}
          ><label className={` ${activeIndex ===index ? "font-black":""}`}>
            {item.title}
          </label>
            
          </button>
        ))}
      </div>

      <div className="flex mt-4 p-12 border justify-around rounded-lg shadow-lg text-center">
  {/* Text content on the left */}
  <div className="flex-1 text-left">
    <h3 className="text-5xl font-semibold">
      {items[activeIndex].title}
    </h3>
    <p className="text-xl mt-2 italic">
      {items[activeIndex].desc}
    </p>
    <p className="text-xl font-thin mt-2">
      {items[activeIndex].price}
    </p>
  </div>

{items[activeIndex].image && (
          <div className="ml-4 relative">
            {/* Display spinner or placeholder while loading */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <FaSpinner className="animate-spin text-gray-500 text-4xl" />
              </div>
            )}
            <Image
              src={items[activeIndex].image}
              alt={items[activeIndex].title}
              width={400}
              height={400}
              className="w-full h-auto"
              onLoad={() => setLoading(false)} // Set loading to false when image finishes loading
              onError={() => setLoading(false)} // Handle loading error
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Menutab;

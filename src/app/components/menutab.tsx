"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { FaSpinner } from 'react-icons/fa';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Refs to store touch start and end positions
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setLoading(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50; // Minimum swipe distance in pixels

    if (swipeDistance > swipeThreshold && activeIndex < items.length - 1) {
      // Swiped left to go to the next item
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else if (swipeDistance < -swipeThreshold && activeIndex > 0) {
      // Swiped right to go to the previous item
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="flex flex-col px-4 space-y-4 ">

      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-1 text-sm  overflow-x-auto no-scrollbar">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-2 hover:text-gray-600 ${
              activeIndex === index ? "underline decoration-3 font-black" : ""
            } rounded transition`}
          >
            {item.title}
          </button>
        ))}
      </div>      
      <hr className="border-black w-full my-2" />

      {/* Swipeable content section */}
      <div
        className="flex overflow-x-auto snap-x snap-mandatory space-x-4 p-2 no-scrollbar"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`min-w-full snap-center rounded-lg shadow-lg flex flex-col items-center justify-center space-y-2 ${
              activeIndex === index ? "block" : "hidden"
            }`}
          >
            {/* Text content */}
            <div className="text-center p-3">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-lg mt-2 italic">{item.desc}</p>
              <p className="text-lg font-thin mt-2">{item.price}</p>
            </div>

            {/* Image content with loading spinner */}
            {item.image && (
              <div className="relative w-256 h-256 flex-shrink-0 p-2 ">
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <FaSpinner className="animate-spin text-gray-500 text-xl" />
                  </div>
                )}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={512}
                  height={512}
                  className="w-full h-auto rounded-lg"
                  onLoad={() => setLoading(false)}
                  onError={() => setLoading(false)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menutab;

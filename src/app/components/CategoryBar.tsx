"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import HSubSection from "./HSubSection";

interface categoryProps {
  title: string;
  link?: string;
  items: {
    title: string;
  }[];
}

const CategoryBar: React.FC<categoryProps> = ({ title, link, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center overflow-scroll overflow-y-hidden  no-scrollbar">
      {link ? (
        <div>
          {/* Navigation Tabs */}
          <div className="flex justify-center items-center h-12 space-x-2 font-serif font-thin text-sm w-full m-2">
            {items.map((item, index) => (
              <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`relative px-2 sm:px-4 py-1 text-sm text-gray-800 hover:text-gray-600 ${
                activeIndex === index ? "font-bold" : ""
              } transition`}
            >
              <label className={`${activeIndex === index ? "font-bold" : ""}`}>
                {item.title}
              </label>
              {activeIndex === index && (
                    <img 
                          src="/title_ornament.png" 
                          alt="ASD"
                          className="w-32 m-auto"
                          />
              )}
            </button>
            
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CategoryBar;

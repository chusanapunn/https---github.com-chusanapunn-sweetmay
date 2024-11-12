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
    <div className="flex flex-col items-center">
      {link ? (
        <div>
          {/* Navigation Tabs */}
          <div className="flex justify-center space-x-2 font-serif font-thin text-sm sm:text-lg w-full p-2">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`  px-2 sm:px-4 py-1 text-xl text-gray-800 hover:text-gray-600 ${
                  activeIndex === index ? "underline font-bold" : ""
                } rounded transition`}
              >
                <label className={`${activeIndex === index ? "font-bold" : ""}`}>
                  {item.title}
                </label>
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

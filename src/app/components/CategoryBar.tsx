"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import HSubSection from "./HSubSection";

interface categoryProps {
  title: string;
  link?: string;
  // bgImage: string;
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
<div >
      {link ? (
        <div>
          {/* Navigation Tabs */}
          <div className="flex justify-center space-x-4 text-2xl">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`px-4 py-2 font-medium hover:text-gray-600 ${
                  activeIndex === index ? "underline font-black" : ""
                } rounded  transition`}>
                  <label className={` ${activeIndex ===index ? "font-black":""}`}>
                    {item.title}
                  </label>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
        </div>
      )}
</div>
  );
};

export default CategoryBar;

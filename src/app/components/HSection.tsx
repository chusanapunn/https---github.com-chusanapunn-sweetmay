"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import HSubSection from "./HSubSection";

interface SectionProps {
  title: string;
  link?: string;
  bgImage: string;

  items: {
    title: string;
    link: string;
    subtitle: string;
    image?: string;
    categories: {
      title: string;
      image?: string;
    }[];
  }[];
}

const Section: React.FC<SectionProps> = ({ link,items }) => {
  
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
<div>s
      {link ? (
        <div>
          {/* Navigation Tabs */}
          <div className="flex justify-center space-x-4 mb-4 text-2xl">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`px-4 py-2 font-medium hover:text-gray-600 ${
                  activeIndex === index ? "underline font-black" : ""
                } rounded  transition`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Display Active HSubSection */}
          <div className="flex flex-col">
            <HSubSection
              title={items[activeIndex].title}
              link={items[activeIndex].link}
              subtitle={items[activeIndex].subtitle}
              image={items[activeIndex].image}
              // categories={items[activeIndex].categories}
            />
          </div>
        </div>
      ) : (
        <div>
          {/* Navigation Tabs */}
          <div className="flex justify-center space-x-4">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`px-4 py-2 text-white font-medium ${
                  activeIndex === index ? "text-black" : "text-white"
                } rounded hover:bg-gray-700 transition`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Display Active HSubSection */}
          <div className="flex flex-col">
            <HSubSection
              title={items[activeIndex].title}
              link={items[activeIndex].link}
              subtitle={items[activeIndex].subtitle}
              image={items[activeIndex].image}
              // categories={items[activeIndex].categories}
            />
          </div>
        </div>
      )}
</div>
  );
};

export default Section;

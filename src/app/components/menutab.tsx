"use client";

import React, { useState, useRef, useEffect } from 'react';
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
  const [modalOpen, setModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    scrollToIndex(index);
  };

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.scrollWidth / items.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.scrollWidth / items.length;
      const centerIndex = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(centerIndex);
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col px-4 ">
      <hr className="border-black w-full" />

      {/* Navigation Tabs */}
      <div className="flex justify-center divide-x divide-black space-x-1 text-sm overflow-x-auto">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-2 hover:text-gray-600 ${
              activeIndex === index ? "underline decoration-3 font-black" : ""
            } transition`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <hr className="border-black w-full" />

      {/* Swipeable content section */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory space-x-4 p-2 no-scrollbar"
        onScroll={handleScroll}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onClick={openModal}
            className={`min-w-full snap-center rounded-2xl shadow-lg flex flex-col bg-gray-100/75 items-center justify-center`}
          >
            <div className="text-center p-3">
              <h3 className="text-2xl font-semibold underline">{item.title}</h3>
              <p className="text-sm mt-2 italic">{item.desc}</p>
              <p className="text-lg font-thin mt-2">{item.price}</p>
            </div>
            {item.image && (
              <div className="relative w-256 h-256 flex-shrink-0 p-2">
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

      {/* Modal for enlarged view */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-2 w-11/12 max-w-lg">
            <button onClick={closeModal} className="text-right font-bold text-xl">
              &times;
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-semibold underline">{items[activeIndex].title}</h3>
              <p className="text-sm mt-2 italic">{items[activeIndex].desc}</p>
              <p className="text-lg font-thin mt-2">{items[activeIndex].price}</p>
            </div>
            {items[activeIndex].image && (
              <Image
                src={items[activeIndex].image}
                alt={items[activeIndex].title}
                width={512}
                height={512}
                className="w-full h-auto rounded-lg mt-4"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menutab;

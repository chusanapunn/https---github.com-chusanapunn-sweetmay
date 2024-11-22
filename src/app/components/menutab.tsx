"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaSpinner } from "react-icons/fa";

interface MenuTabProps {
  title: string;
  items: {
    title: string;
    thtitle: string;
    desc: string;
    price: string;
    image?: string;
  }[];
}

const Menutab: React.FC<MenuTabProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    scrollToContent(index);
  };

  const scrollToContent = (index: number) => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.scrollWidth / items.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const scrollTabsToActive = (index: number) => {
    const tabsContainer = tabsRef.current;
    const tabElement = tabsContainer?.children[index] as HTMLElement;

    if (tabsContainer && tabElement) {
      const tabLeft = tabElement.offsetLeft;
      const tabWidth = tabElement.offsetWidth;
      const containerScrollWidth = tabsContainer.clientWidth;

      if (tabLeft < tabsContainer.scrollLeft) {
        tabsContainer.scrollTo({ left: tabLeft, behavior: "smooth" });
      } else if (tabLeft + tabWidth > tabsContainer.scrollLeft + containerScrollWidth) {
        tabsContainer.scrollTo({
          left: tabLeft + tabWidth - containerScrollWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.scrollWidth / items.length;
      const centerIndex = Math.round(container.scrollLeft / cardWidth);
      if (centerIndex !== activeIndex) {
        setActiveIndex(centerIndex);
        scrollTabsToActive(centerIndex); // Scroll tabs container to active tab
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [activeIndex]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col px-4 font-serif font-thin">
      {/* Navigation Tabs */}
      <div
        ref={tabsRef}
        className="flex justify-evenly overflow-x-auto no-scrollbar "
      >
        {items.map((item, index) => (
      <button
        key={index}  // Key prop ensures re-rendering when index changes
        onClick={() => handleTabClick(index)}
        className={`px-6 py-2 whitespace-nowrap  text-sm sm:text-base ${
          activeIndex === index
            ? "underline decoration-2 font-bold bg-orange-300/50"
            : "hover:text-gray-600"
        }`}
      >
        {item.title}
        <p className="text-xs sm:text-sm">{item.thtitle}</p>
      </button>
    ))}

      </div>

      {/* Swipeable Content Section */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory space-x-4 py-4 no-scrollbar"
      >
        {items.map((item, index) => (
          <div
            key={index}
            onClick={openModal}
            className="min-w-full snap-center flex flex-col items-center justify-center bg-gray-100 rounded-2xl shadow-lg"
          >
            <div className="text-center p-3">
              <h3 className="text-lg sm:text-2xl font-semibold">{item.title}</h3>
              <h2 className="text-base sm:text-xl font-thin">{item.thtitle}</h2>
              <img
                src="/title_ornament.png"
                alt="Ornament"
                className="w-24 sm:w-32 mx-auto"
              />
              <p className="text-sm sm:text-lg font-normal mt-2">{item.price}</p>
            </div>
            {item.image && (
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex-shrink-0 p-2">
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <FaSpinner className="animate-spin text-gray-500 text-xl" />
                  </div>
                )}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={256}
                  height={256}
                  className="w-full h-auto rounded-lg"
                  onLoad={() => setLoading(false)}
                  onError={() => setLoading(false)}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 w-11/12 max-w-md mx-auto">
            <button
              onClick={closeModal}
              className="text-right font-bold text-lg sm:text-xl"
            >
              &times;
            </button>
            <div className="text-center">
              <h3 className="text-lg sm:text-2xl font-semibold">
                {items[activeIndex].title}
              </h3>
              <h3 className="text-base sm:text-xl font-thin">
                {items[activeIndex].thtitle}
              </h3>
              <p className="text-sm sm:text-lg font-normal mt-2">
                {items[activeIndex].price}
              </p>
            </div>
            {items[activeIndex].image && (
              <Image
                src={items[activeIndex].image}
                alt={items[activeIndex].title}
                width={512}
                height={512}
                className="w-full h-auto rounded-xl mt-4"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menutab;

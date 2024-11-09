"use client"

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import productCategoryCard from "./productCategoryCard";

interface HSubSectionProps {
  title: string;
  link?: string;
  subtitle: string;
  image?: string;
  categories?: {
    title: string;
    image: string;
  }[];
}

const HSubSection: React.FC<HSubSectionProps> = ({ title,link, subtitle, image, categories }) => {

  return (
  <div className="p-4">
    {link ? (
        <Link href={link}>
          <h1 className="text-3xl font-serif">{title}</h1>
          <h2 className="text-xl">{subtitle}</h2>

          {image && (
            <div className="w-full h-64 flex items-center justify-center">
              <img src={image} alt={title} className="object-cover w-full h-full" />
            </div>
          )}
          <div className="flex flex-col w-full mt-4">
            {categories?.map((category, index) => (
              <div key={index} className=" mb-2">
                <h2 className="text-lg">
                  {category.title}
                </h2>
                  {category.image && (
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-32"
                  />
                  )}
              </div>
            ))}
          </div>
        </Link>
  )  : (
        <div>
          <h1 className="text-3xl font-serif">{title}</h1>
          <h2 className="text-xl">{subtitle}</h2>
        </div>
      )}
  </div>
  );
};
export default HSubSection;
"use client"

import React from 'react';
import Link from 'next/link';
// import Image from "next/image";
interface SubSectionProps {
  title: string;
  subtitle: string;
  image?: string;
  link: string;
}

const SubSection: React.FC<SubSectionProps> = ({ title, link, subtitle, image }) => {
  return (
<div className="flex flex-col min-h-[124px] bg-black/30 hover:bg-black/70 w-full transition duration-300 ease-in-out">
  <Link href= {link} className=" font-medium">
    <div className="flex flex-col justify-between text-white drop-shadow-md shadow-inner m-4">
        <h1 className=" sm:text-sm font-serif ">
          {title}
        </h1>
        <h2>
          {subtitle}
        </h2>
    </div>
      {image && (
        <div className="flex justify-center mt-auto shadow-inner shadow-lg ">
          <img src={image} alt={title} className="h-32 w-full object-cover " />
        </div>
      )}
  </Link>
</div>
    
  );
};
export default SubSection;
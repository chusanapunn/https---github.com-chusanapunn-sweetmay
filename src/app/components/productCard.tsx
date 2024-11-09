"use client"

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
interface SubSectionProps {
  title: string;
  subtitle: string;
  image?: string;
}

const SubSection: React.FC<SubSectionProps> = ({ title, subtitle, image }) => {
  return (
    <div className="flex items-center bg-orange-50/25 ">
      <div className="flex-grwow basis-1/4 text-white drop-shadow-md m-12">
        <h1 className="text-2xl font-serif">{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      {image && (
          <img src={image} alt={title} className="flex basis-3/4 w-128 h-48 object-cover" />
      )}
    </div>
  );
};
export default SubSection;
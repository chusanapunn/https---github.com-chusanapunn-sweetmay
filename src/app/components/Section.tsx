"use client"

import React from 'react';
import Link from 'next/link';
import SubSection from "./SubSection";

interface SectionProps {
  title: string;
  link?: string;
  bgImage: string;
  items: {
    title: string;
    subtitle: string;
    image?: string;
    link: string;
  }[];
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  link, 
  bgImage, 
  items 
}) => {
  return (
  <div 
    className="flex-wrap flex-auto bg-no-repeat bg-cover bg-bottom drop-shadow-xl"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className ="text-white hover:bg-black/40 transition duration-300 ease-in-out">
        {link ? (
          <div className="inner-shadow ">
            <Link href={link}>
              <h1 className=" p-4 transition duration-300 opacity-0 hover:opacity-100 tracking-widest font-serif text-3xl pb-48">
                {title}
              </h1>
              </Link>
              <div className="flex flex-col">
                {items.map((item, index) => (
                  <SubSection
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    link={item.link}
                  />  
                ))}
              </div>
              
          </div>
        ) : (
          <h1 className="m-8 p-8 tracking-widest font-serif text-5xl">
            {title}
          </h1>
        )}
    </div>
  </div>
  );
};

export default Section;
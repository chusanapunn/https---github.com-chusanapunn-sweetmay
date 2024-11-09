import React from 'react';
import Link from 'next/link';
import Section from './components/Section';

export default function Home() {
  return (
    <div className=" flex flex-col justify-between overflow-hidden">
      {/* Header Section */}
      <div className="p-6">
        <h1 className="decoration-4 flex opacity-90 tracking-widest lg:text-5xl justify-end">
          Sweetmay Studio
        </h1>
        <p className="flex opacity-90 tracking-widest text-sm lg:text-3xl pr-4 justify-end">
          love passion wellness
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-wrap">
        <Section
          title="Sweetmay"
          link="/sweetmay"
          bgImage="/LINE_ALBUM_Sweetmay_241019_1.jpg"
          items={[
            { title: 'Pastry', subtitle: 'ขนมอบ', image: "/LINE_ALBUM_F.jpg", link: "/pastry" },
            { title: 'Bakery', subtitle: 'ขนมปัง', image: "/LINE_ALBUM_Sourdough_241021_1.jpg", link: "/pastry" },
            { title: 'Cuisine', subtitle: 'ครัวอาหาร', image: "/530797936574464353.jpg", link: "/pastry" },
          ]}
        />

        <Section
          title="Sweetcraft"
          link="/sweetcraft"
          bgImage="/craftCover.png"
          items={[
            { title: 'Painting', subtitle: 'ระบายสี', image: "/530797936574464353.jpg", link: "/pastry" },
            { title: 'Knit', subtitle: 'งานถัก', image: "/LINE_ALBUM_F.jpg", link: "/pastry" },
            { title: "Let's DIY", subtitle: 'ทำด้วยกัน', image: "/LINE_ALBUM_Sourdough_241021_1.jpg", link: "/pastry" },
          ]}
        />

        <Section
          title="Sweetplant"
          link="/sweetplant"
          bgImage="/sweetplantCover.png"
          items={[
            { title: 'POT Plant', subtitle: 'ต้นไม้กระถางเล็ก', image: "/LINE_ALBUM_Sourdough_241021_1.jpg", link: "/pastry" },
            { title: 'Pot Painting', subtitle: 'ระบายสีกระถางต้นไม้', image: "/LINE_ALBUM_F.jpg", link: "/pastry" },
            { title: 'Plant@', subtitle: 'ปลูกด้วยกัน', image: "/530797936574464353.jpg", link: "/pastry" },
          ]}
        />
      </div>
    </div>
  );
}

import React from "react";
import about from "../assets/about-hero.jpg";
const AboutHero = ({ title }) => {
  return (
    <div
      className=" relative h-screen bg-no-repeat bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${about})` }}
    >
      <div className="absolute w-full h-full bg-[#0000008f]"></div>
      <h1 className="md:text-[60px] text-[35px] font-bold text-primary z-10">
        {title}
      </h1>
    </div>
  );
};

export default AboutHero;

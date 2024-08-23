import React from "react";
import sectionImg from "../assets/about-section.png";
const AboutSection = ({ title, title2, subtitle }) => {
  return (
    <div className="md:p-[50px_40px] p-[20px_20px] ">
      <div className="about-company flex flex-wrap justify-between items-center">
        <div className="about-content md:w-[45%] w-full flex flex-col gap-10">
          <h2 className="md:text-7xl text-3xl font-bold text-secondary">
            {title}
            <span className="text-primary"> {title2}</span>
          </h2>
          <p className="text-xl leading-10 text-secondary">{subtitle}</p>
          <div className="statistic"></div>
        </div>
        <div
          className="about-img md:w-[45%] w-full border border-primary"
          style={{
            borderTopLeftRadius: "150px",
            borderBottomRightRadius: "150px",
          }}
        >
          <img src={sectionImg} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

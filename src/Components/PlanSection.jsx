import React from "react";
import planImg from "../assets/plane-section.jpg";
const PlanSection = ({ title, title2, subtitle }) => {
  return (
    <div className="md:p-[50px_40px] p-[20px_20px] ">
      <div className="company-plane flex lg:flex-row-reverse flex-col gap-5 justify-between items-center">
        <div className="about-content lg:w-[45%] w-full flex flex-col lg:gap-16 gap-10 ">
          <h2
            className="lg:text-7xl md:text-5xl text-3xl font-bold text-secondary"
            style={{ textShadow: "#5c371b 10px 5px 10px" }}
          >
            {title}
            <span className="text-primary"> {title2}</span>
          </h2>
          <p className="text-xl leading-10 text-secondary">{subtitle}</p>
        </div>
        <div
          className="about-img lg:w-[45%] w-full"
          style={{
            borderTopLeftRadius: "150px",
            borderBottomRightRadius: "150px",
          }}
        >
          <img src={planImg} alt="" className="w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default PlanSection;

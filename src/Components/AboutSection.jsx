import React, { useState } from "react";
import sectionImg from "../assets/about-section.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const AboutSection = ({ title, title2, subtitle }) => {
  const [counterOn, setcounterOn] = useState(false);
  return (
    <div
      className="md:p-[50px_40px] p-[20px_20px]"
      style={{ background: "#5c371b10" }}
    >
      <div className="about-company flex lg:flex-row flex-col gap-5 justify-between items-center">
        <div className="about-content lg:w-[45%] w-full flex flex-col gap-10 pb-[40px] md:p-0 ">
          <h2
            className="lg:text-7xl md:text-5xl text-3xl font-bold text-secondary"
            style={{ textShadow: "#5c371b 10px 5px 10px" }}
          >
            {title}
            <span className="text-primary"> {title2}</span>
          </h2>
          <p className="text-xl leading-10 text-secondary">{subtitle}</p>
          <ScrollTrigger
            onEnter={() => setcounterOn(true)}
            onExit={() => setcounterOn(false)}
          >
            <div className="statistic flex items-center justify-between">
              <div className="experience flex flex-col items-center">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={24}
                    duration={2}
                    delay={0}
                    className="text-5xl text-primary font-bold"
                  />
                )}
                <h2 className="text-secondary font-bold text-lg">
                  Years Of Experience
                </h2>
              </div>
              <div className="projects flex flex-col items-center">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={5}
                    duration={2}
                    delay={0}
                    className="text-5xl text-primary font-bold"
                  />
                )}
                <h2 className="text-secondary font-bold text-lg">
                  Our Branches
                </h2>
              </div>
              <div className="projects flex flex-col items-center">
                <div className="count flex items-center gap-2">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={20}
                      duration={2}
                      delay={0}
                      className="text-5xl text-primary font-bold"
                    />
                  )}
                  <span className="text-primary font-bold text-5xl">+</span>
                </div>
                <h2 className="text-secondary font-bold text-lg">
                  Extrodnary Projects
                </h2>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        <div className="about-img lg:w-[45%] w-full">
          <img src={sectionImg} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

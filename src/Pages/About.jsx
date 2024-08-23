import React from "react";
import AboutHero from "../Components/AboutHero";
import AboutSection from "../Components/AboutSection";

const About = () => {
  return (
    <div>
      <AboutHero title="About Our Company" />
      <AboutSection
        title="About"
        title2="Us"
        subtitle="Vision Group has been established since 1995
It is specialized in security devices, surveillance
cameras, anti-theft devices, networks and software.
It keeps pace with the latest technologies and our
successes have continued to expand globally. "
      />
    </div>
  );
};

export default About;

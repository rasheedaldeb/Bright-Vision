import React from "react";
import AboutHero from "../Components/AboutHero";
import AboutSection from "../Components/AboutSection";
import PlanSection from "../Components/PlanSection";

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
      <PlanSection
        title="Our"
        title2="Plan"
        subtitle="During our plan to expand and spread this year, 
branches will be opened in Qatar, Bahrain and Kuwait
Here are some of our most important projects in
the Kingdom of Saudi Arabia;/The Red Sea Project,
NEOM City Project, and the King Abdullah Financial Center /
Our successes also continue in several projects within 
the Gulf Cooperation Council countries and Europe"
      />
    </div>
  );
};

export default About;

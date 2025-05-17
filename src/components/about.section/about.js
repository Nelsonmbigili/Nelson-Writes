import React from "react";
import SkillCard from "../cards/skillCard";
import {
  AboutPageContainer,
  PageTitle,
  AboutMeTextContainer,
} from "./about-styles";
import { CardContainer } from "../cards/cardContainer";
import frontendIcon from "../../assets/frontend.svg";
import backendIcon from "../../assets/backend.svg";
import debuggingIcon from "../../assets/debugging.svg";
import gitBranchIcon from "../../assets/gitbranch.svg";

const SkillsGrid = () => (
  <CardContainer>
    <SkillCard title="Frontend Development" icon={frontendIcon} />
    <SkillCard title="Backend Development" icon={backendIcon} />
    <SkillCard title="Debugging & Problem Solving" icon={debuggingIcon} />
    <SkillCard title="Version Control & Collaboration" icon={gitBranchIcon} />
  </CardContainer>
);

const About = () => {
  return (
    <AboutPageContainer id="about">
      <PageTitle>About Me</PageTitle>
      <AboutMeTextContainer>
        I am a Computer Science student at NYU Abu Dhabi, originally from
        Tanzania, with strong interests in software development and data
        science. I am passionate about designing and building intuitive
        applications that address real-world problems and streamline everyday
        workflows. My academic journey and hands-on experience, spanning
        coursework, hackathons, and independent projects, have shaped my
        ability to thrive in collaborative, idea-driven environments. I embrace
        new challenges and am eager to contribute my technical and analytical
        skills to projects that create meaningful, measurable impact.
      </AboutMeTextContainer>
      <SkillsGrid />
    </AboutPageContainer>
  );
};

export default About;
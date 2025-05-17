import {
  ProjectCardContainer,
  DemoOrSourceWrapper,
  ImageTitle,
  Images,
  ImageWrapper,
} from './projectCard-styles.js';
import Button from '../buttons/button.js';
import React from "react";
import githubIcon from "../../assets/github.svg"; 

export const DemoOrSource = ({ demo, source }) => {
  return (
    <DemoOrSourceWrapper>
    <Button title="About" onClick={()=>{ window.open(demo, "_blank")}}/>
    <Button title="Demo" onClick={()=>{ window.open(demo, "_blank")}}/>
    <img src={githubIcon} alt="GitHub" onClick={() => { window.open(source, "_blank"); }} />
    </DemoOrSourceWrapper>
  );
};

export const ProjectImage = ({ title, image , demo, source}) => {
  return (
    <ImageWrapper>
      <Images src={image} alt={title} onClick={()=> {window.open(source, "_blank");}}/>
      <ImageTitle  onClick={()=> {window.open(demo, "_blank");}} >{title}</ImageTitle>
    </ImageWrapper>
  );
};


export const ProjectCard = ({ children }) => {
  return (
    <ProjectCardContainer>
      {children}
    </ProjectCardContainer>
  );
};

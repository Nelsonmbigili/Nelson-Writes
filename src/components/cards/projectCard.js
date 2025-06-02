import React from "react";
import {
  ProjectCardContainer,
  DemoOrSourceWrapper,
  ImageTitle,
  Images,
  ImageWrapper,
} from './projectCard-styles.js';
import Button from '../buttons/button.js';
import githubIcon from "../../assets/github.svg";

export const DemoOrSource = ({ demo, source }) => {
  return (
    <DemoOrSourceWrapper>
      <Button title="About" onClick={() => window.open(demo, "_blank")} />
      <Button title="Demo" onClick={() => window.open(demo, "_blank")} />
      <button
        aria-label="View Source on GitHub"
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
        }}
      >
        <img src={githubIcon} alt="GitHub" />
      </button>
    </DemoOrSourceWrapper>
  );
};

export const ProjectImage = ({ title, image, demo, source }) => {
  return (
    <ImageWrapper>
      <Images
        src={image}
        alt={title}
        onClick={() => window.open(source, "_blank")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && window.open(source, "_blank")}
        aria-label={`Open source for ${title}`}
      />
      <ImageTitle
        as="button"
        onClick={() => window.open(demo, "_blank")}
        onKeyDown={(e) => e.key === 'Enter' && window.open(demo, "_blank")}
        style={{
          border: 'none',
          padding: 0,
          textAlign: 'center',
        }}
        
      >
        {title}
      </ImageTitle>
    </ImageWrapper>
  );
};

export const ProjectCard = ({ children }) => {
  return <ProjectCardContainer>{children}</ProjectCardContainer>;
};

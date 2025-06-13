import React from "react";
import { HomePageContainer, NameContainer, RedirectButtonsContainer, Gradience, ArrowIcon } from "../porfolio.styles";
import Button from "../buttons/button";

const MyCv = 'https://drive.google.com/file/d/1CnjQZeR3RCyzkCdQvZkjGEpoaHi3YVdN/view?usp=sharing';

const DownloadCVButton = () => {
  const openDriveLink = () => {
    window.open(MyCv, '_blank');
  };
  return <Button title="⬇ My Resume" onClick={openDriveLink} />;
};

const Name = ({ scrollTo }) => (
  <HomePageContainer>
    <Gradience>
      <img src="https://i.postimg.cc/DyrjPJr3/Nelson-Mbigili.jpg" alt="Nelson Mbigili" />
      <h1>
        <NameContainer> Nelson Francis Mbigili </NameContainer>
      </h1>
      <h2>
        <span>A Software Engineer and Data Enthusiast</span>
      </h2>
      <span>I enjoy building solutions with modern technologies</span>
      <RedirectButtonsContainer>
        <Button title="Featured Projects" onClick={() => scrollTo("projects")} />
        <Button title="Get in Touch" onClick={() => scrollTo("contacts")} />
        <DownloadCVButton />
      </RedirectButtonsContainer>
    </Gradience>
   <button
      onClick={() => scrollTo("about")}
      onKeyDown={(e) => e.key === 'Enter' && scrollTo("about")}
      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      aria-label="Scroll to about section">
        <ArrowIcon viewBox="0 0 24 24">
          <path d="M12 19l-7-7h4V5h6v7h4l-7 7z" />
        </ArrowIcon>
    </button>
  </HomePageContainer>
);

export default Name;

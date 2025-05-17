import { ProjectCard , DemoOrSource, ProjectImage} from "../cards/projectCard";
import { CardContainer } from "../cards/cardContainer";
import { PageTitle,GeneralText,ProjectPageContainer} from "./projects-styles";
import React from "react";

const OutLookCard = () => {
  return (
    <ProjectCard>
      <ProjectImage title="OutLook: e-shopping store" image="static/OutLook.webp" demo="https://outlookfashion.netlify.app/"/>
      <DemoOrSource source="https://github.com/Nelsonmbigili/clothing_store.git" demo="https://outlookfashion.netlify.app/"/>
    </ProjectCard>
  );
};

const FifaDataCard = () => {
  return (
    <ProjectCard>
      <ProjectImage title="Fifa DataLab: Data Analysis & Viz" image="static/Football.jpg" demo="https://the-fifa-data-lab.streamlit.app//"/>
      <DemoOrSource source="https://github.com/Nelsonmbigili/FIFA-DataLab-The-Game.git" demo="https://the-fifa-data-lab.streamlit.app//"/>
    </ProjectCard>
  );
};

const GetFaceCard = () => {
  return (
    <ProjectCard>
      <ProjectImage title="Get Face: Face Recognition" image="static/GetFace.png" demo=""/>
      <DemoOrSource source="https://github.com/Nelsonmbigili/GetFace-Frontend.git" demo="https://getface-frontend.onrender.com/"/>
    </ProjectCard>
  );
};

const HealingSpace = () => {
  return (
    <ProjectCard>
      <ProjectImage title="Healing Space: Virtual Reality" image="static/HealingSpace.jpg" source=""/>
      <DemoOrSource source="" demo=""/>
    </ProjectCard>
  );
};

const NyuAdPuzzleCard = () => {
  return (
    <ProjectCard>
      <ProjectImage title="TBD" image="/OutLook.webp" demo=""/>
      <DemoOrSource source="https://github.com/Nelsonmbigili/clothing_store.git" demo="https://inspiring-strudel-7862a3.netlify.app/"/>
    </ProjectCard>
  );
};

const P2PFileShareCard = () => {
  return (
    <ProjectCard>
      <ProjectImage title="TBD" image="static/OutLook.webp" demo=""/>
      <DemoOrSource source="" demo=""/>
    </ProjectCard>
  );
};

const DataScienceFinalProjectCard = () => {
  return (
    <ProjectCard>
      <ProjectImage title="" image="/OutLook.webp" demo=""/>
      <DemoOrSource source="" demo=""/>
    </ProjectCard>
  );
};


const AnimalFromSound = () => {
  return (
    <ProjectCard>
      <ProjectImage title="TBD" image="/OutLook.webp" demo=""/>
      <DemoOrSource source="" demo=""/>
    </ProjectCard>
  );
};


const Projects = () =>
    {
      return(
        <ProjectPageContainer id='projects'>
            <PageTitle > Featured Projects </PageTitle>
            <GeneralText>Here are some of my recent projects that showcase my skills and experience</GeneralText>
            <CardContainer>
                <OutLookCard/>
                <FifaDataCard/>
                <GetFaceCard/>
                <HealingSpace/>
                {/* <NyuAdPuzzleCard/>
                <P2PFileShareCard/>
                <DataScienceFinalProjectCard/>
                <AnimalFromSound/> */}
              </CardContainer>
        </ProjectPageContainer>
      )
    }
  
export default Projects;
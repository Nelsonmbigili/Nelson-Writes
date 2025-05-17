import Name from "../components/name.section/name.js"; 
import About from "../components/about.section/about.js";
import Projects from "../components/projects.section/projects.js";
import Contacts from "../components/contacts.section/contacts.js";
import React from "react";
import Layout from "../components/layout.js";
import Seo from "../components/seo.tsx";


const Portfolio = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
  <Layout>
    <Seo title='Home'/>
    <Name scrollTo={scrollTo} />
    <About/>
    <Projects/>
    <Contacts/>
  </Layout>
    
  );
};

export default Portfolio;
import React from "react";
import Card from "./card";
import { Icons } from "../about.section/about-styles";

const SkillCard = ({ title, icon }) => (
  <Card>
    <h2>{title}</h2>
    <Icons src={icon} />
  </Card>
);

export default SkillCard;
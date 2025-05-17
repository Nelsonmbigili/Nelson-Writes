
import { StyledCardContainer } from "./cardContainer-styles";
import React from "react";

export const CardContainer = ({ children }) => {
  return (
    <StyledCardContainer>
      {children}
    </StyledCardContainer>
  );
};

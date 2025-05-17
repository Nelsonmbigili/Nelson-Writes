import  {StyledCard} from './card-styles';
import React from "react";

const Card = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
};

export default Card;
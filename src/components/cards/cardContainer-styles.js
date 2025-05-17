import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: grid;
  text-align:center;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  border-radius: 10px;
  padding-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 5px;
  }
`;
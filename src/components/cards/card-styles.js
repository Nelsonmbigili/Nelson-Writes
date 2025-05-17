import styled from "styled-components";

export const StyledCard = styled.div`
  background-color:rgb(126, 123, 142);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:center;
  align-items: center;
  border-radius: 10px;
  color: white;
  width: 300px;
  height: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
  transition: transform 1s ease, box-shadow 1s ease; 

  @media (max-width: 768px) {
    width: 300px;
    height: 200px;

    h2 {
      font-size: 10px;
    }
  }

  &:hover {
    transform: scale(1.02);
  }
`;


import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 140px;
  white-space: nowrap;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 12px;
  align-items: center;
  background-color: rgb(31, 24, 68);
  color: white;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bolder;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: transform 0.8s ease;
  transform-origin: center center;

  &:hover {
    background-color:rgb(49, 41, 97);
    transform: scale(1.003);
  }

  @media (max-width: 768px) {
    padding: 0 15px;
    font-size: 10px;
    width: 130px;
  }
`;

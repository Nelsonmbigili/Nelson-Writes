import styled, { keyframes } from 'styled-components';

const arrowBlink = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  50% { opacity: 0.5; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const ArrowIcon = styled.svg`
  width: 30px;
  height: 50px;
  animation: ${arrowBlink} 2s infinite;
  cursor: pointer;
  display: inline-block;
  fill:rgb(8, 8, 8);
`;

export const HomePageContainer = styled.div`
  @media (min-width: 1024px) {
    height: 100vh;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    padding-top: 50px;
    height: 100vh;
  }
  @media (max-width: 400px) {
    font-size: 8px;
    padding-top: 20px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: black;
  gap: 10px;
  padding-bottom: 30px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgb(10, 11, 10);
    box-shadow: 0 0 20px rgb(16, 15, 15);
  }
`;

export const NameContainer = styled.span`
  color: rgb(5, 12, 5);
`;

export const HomeContainer = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
`;

export const RedirectButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  padding-bottom: 100px;
`;

export const Gradience = styled.div`
  width: 600px;

  @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width: 400px) {
    width: 300px;
  }

  position: relative;
  z-index: 1;
  color: hsl(var(--foreground));
  background-color: transparent;
  box-shadow: 10px 10px 10px -10px rgba(255, 255, 255, 1);
  opacity: 1;
  padding: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.003);
  }

  &::before {
    position: absolute;
    background: radial-gradient(circle, rgb(106, 94, 94) 100%, #9096a0 30%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0.2;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
`;

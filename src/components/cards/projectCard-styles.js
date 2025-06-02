import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  background-color: rgb(126, 123, 142);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  width: 300px;
  height: 450px;
  border: 0.1px solid rgb(182, 176, 176);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
  transition: transform 1s ease, box-shadow 1s ease; 
  -webkit-tap-highlight-color: transparent; /* For iOS */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* For Android */

  &:hover {
     transform: scale(1.01);
  }


  @media (max-width: 768px) {
    width: 300px;
    height: 200px;

    h2 {
      font-size: 10px;
    }
  }
`;

export const DemoOrSourceWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 20%;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  button{
   width: 60px;
   height: 30px;
   font-size: 10px;
   -webkit-tap-highlight-color: transparent; /* For iOS */
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* For Android */
  }
  img{
   width: 20px;
   height: 30px;
  }

  @media (max-width: 768px) {
    font-size: 8px;
    padding-top: 5%;
  }
`;

export const ImageTitle = styled.div`
  position: absolute;
  top: 0;
  margin: 20%;
  width: 60%;
  padding: 10px;
  color: black;
  background: rgba(240, 231, 231, 0.6);
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 9px;
    width: 40%;
  }
   transition: transform 1s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

export const Images = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover;
  display: block;
  @media (max-width: 768px) {
    padding-top: 5%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60%;
  overflow: hidden;
  border-radius: 1%;
  cursor: pointer;
`;

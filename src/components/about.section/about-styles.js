import styled from "styled-components";

export const AboutPageContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center; 
    gap: 40px;
    height: 100vh; 
    @media (max-width: 768px) {
    padding-top:30px;
    font-size: 10px;
    width: 100%;
    height: auto; 
    gap: 5px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center; 
    gap: 30px;
  }

`
export const PageTitle  = styled.div`
    color: black;
    padding-top: 200px;
    font-size: 50px;
    @media (max-width: 768px) {
    font-size: 20px; 
    padding-top: 150px;
  }
`
export const AboutMeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: black;
    text-align: center;33333
    font-size: 50px;
    line-height: 1.6;
    @media (max-width: 768px) {
    padding-top:20px;
    font-size: 10px;
    width: 80%;
  }
`


export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap; 
  gap: 16px;
  justify-content: center; 
  @media (min-width: 768px) 
  {
    align-items: center; 
    display:grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 10px;
  }
`

export const Icons = styled.img`
width: 50px;
height: 60px;
transition: transform 0.3s ease, opacity 0.3s ease;
&:hover {
  transform: scale(1.1);
  opacity: 0.8;}
`
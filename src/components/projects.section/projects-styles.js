import styled from "styled-components";

export const PageTitle = styled.span`
   color: black;
   font-size: 50px;
   @media (max-width: 768px) {
    font-size: 20px; 
  }
`
export const GeneralText = styled.span`
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
    font-size: 10px;
    width: 80%; 
    }
  `

  export const ProjectPageContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center; 
  gap: 40px;
  height: 100vh;
  @media (max-width: 768px) {
    padding-top: 30px;
    height: auto; 
    gap: 30px;
    }
`

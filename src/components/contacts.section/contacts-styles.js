import styled from "styled-components";

export const ContactsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  position: relative;
  padding-bottom: 10px; 
  box-sizing: border-box;
  justify-content: center;
  gap: 10px;
  @media (max-width: 768px) {
    height: auto;
    padding-top: 30px;
    }
`;

export const SocialLinks = styled.a`
  text-decoration:none;
  display:flex;
  color: white:
  flex-direction:row;
  justify-content:center;
  align-items:center;
  gap: 30px;
  img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
`;

export const Divider = styled.hr`
  width: 80%;
  border: none;
  border-top: 2px solid #ccc;
`;


export const Footer = styled.footer`
  text-align: center;
  color: white;
`;

export const SocialsContainerStyles = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
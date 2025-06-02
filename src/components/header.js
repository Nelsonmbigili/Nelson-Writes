import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: white;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: none;
`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      borderBottom: `1px solid #ddd`,
      position: `fixed`,
      width: `100%`, 
      zIndex: 10,
      background: `linear-gradient(to right, rgb(31, 24, 68), rgb(34, 23, 63))`,
      color: `white`
    }}
  >
    <StyledLink to="/"> {siteTitle}</StyledLink>
    <StyledLink  to="/blogs">Blogs</StyledLink>
    
    
    
    
  </header>
)

export default Header

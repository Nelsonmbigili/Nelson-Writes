import * as React from "react"
import { Link } from "gatsby"

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
    <Link
      to="/"
      style={{
        fontSize: `30px`,
        textDecoration: `none`,
        color: `white`, 
      }}
    >
      {siteTitle}
    </Link>
    <Link
      to="/blogs"
      style={{
        fontSize: `30px`,
        textDecoration: `none`,
        color: `white`, 
      }}
    >
     Blogs
    </Link>
    
    
    
    
  </header>
)

export default Header

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const SocialsContainer = () => {
  return (
    <div className="social-container">
  
      <a
        className="social-links"
        href="https://www.linkedin.com/in/nelson-mbigili-77412b20b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/static/linkedln.svg" alt="LinkedIn" />
      </a>

      <a
        className="social-links"
        href="https://github.com/Nelsonmbigili"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/static/github.svg" alt="GitHub" />
      </a>

      <a
        className="social-links"
        href="https://instagram.com/mbigilinelson"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="static/instagram.svg" alt="Instagram" />
      </a>
    </div>
  );
};


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      <div
        style={{
          paddingTop: '120px',
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          <hr className="footer-divider" />
          <SocialsContainer/>
          <p>
            &copy; 2025 Nelson Mbigili, All rights reserved.
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout

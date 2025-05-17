import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface SeoProps {
  title: string;
  description?: string; // Make optional
  children?: React.ReactNode; // Make optional
}

function Seo({ description = "", title, children }: SeoProps) {
  const { site } = useStaticQuery<{
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  }>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="google-site-verification" content="HS8rYetmahVib0ImdQYcUXfXSKSmQI8KdiYZ9P9AzBg" />
      {children}
    </>
  )
}

export default Seo
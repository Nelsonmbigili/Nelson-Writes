import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import "./blogs.styles.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
   -webkit-tap-highlight-color: transparent; /* For iOS */
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* For Android */
`

const BlogTitle= styled.h3`
   margin-bottom: 20px;
   font-size: 20px;
   color: white;
   font-weight: 800;
   cursor: pointer;
    &:hover {
      color:rgb(47, 13, 215);
    }
`

const IndexPage = ({data}) => (
  <Layout>
    <Seo title='Home'/>
    <div>
      <h2 style={{ paddingTop: "110px" }}>Some Reads By Nelson</h2>
      <h3>{data.allMarkdownRemark.totalCount} Posts</h3>
      {
        data.allMarkdownRemark.edges.map(({node}) =>
        <div key={node.id} className="blog-post">
        <BlogLink to= {node.fields.slug}>
        <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
        </BlogLink>
        <p>"{node.excerpt}"</p>
          </div>
         )
      }
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blogs" />

export default IndexPage
export const query = graphql`
query{
  allMarkdownRemark (sort: { frontmatter: { date: DESC } }){
    totalCount
    edges {
      node {
        id
        frontmatter{
          description
          title
          date 
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
}
`

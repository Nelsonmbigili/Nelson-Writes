import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPost = ({data})=>{
    const post = data.markdownRemark;
    return (
        <Layout>
            <div>
                <h1 style={{ paddingTop: "110px" }} >{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>

             </div>

        </Layout>
    )
}

export default BlogPost;

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields: {slug: {eq: $slug}}){
            html
            frontmatter{
                title
            }
        }
    }
`
import * as React from "react"
import { PageProps, graphql, HeadFC, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, location }) => (
  <Layout>
    <h1>
      Gatsby supports <b>TypeScript by default</b>
    </h1>
    <p>
      You’re on <code>{location.pathname}</code> which was built on {data.site.buildTime}.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head: HeadFC<DataProps> = () => <Seo title="Using TypeScript" />

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`

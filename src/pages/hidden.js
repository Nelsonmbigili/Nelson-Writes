import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HiddenPage = () => (
  <Layout>
    <h1 style={{ paddingTop: "100px" }}>Hi,Welcome to the Hidden Page</h1>
    <p>Every day is a new opportunity to learn, grow, and make the most of the present moment. Embrace the journey!</p>

    <Link to="/">Return to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Hidden Page" />

export default HiddenPage



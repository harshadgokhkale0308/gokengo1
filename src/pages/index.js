import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import Header from "../components/Header"
import Summary from "../components/summary"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header></Header>
    <Summary></Summary>
  </Layout>
)

export default IndexPage

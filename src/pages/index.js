import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import Header from "../components/Header"
import Summary from "../components/summary"
import Features from "../components/Features"
import Impact from "../components/Impact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header></Header>
    <Summary></Summary>
    <Features></Features>
    <Impact></Impact>
  </Layout>
)

export default IndexPage

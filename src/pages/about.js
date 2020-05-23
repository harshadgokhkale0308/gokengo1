import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import AboutHeader from "../components/AboutHeader"
import AboutSectionOne from "../components/AboutSectionOne"
import AboutSectionTwo from "../components/AboutSectionTwo"
import DemoBanner from "../components/DemoBanner"

const about = () => {
  return (
    <Layout>
      <SEO title="about" />
      <AboutHeader></AboutHeader>
      <AboutSectionOne></AboutSectionOne>
      <AboutSectionTwo></AboutSectionTwo>
      <DemoBanner></DemoBanner>
    </Layout>
  )
}

export default about

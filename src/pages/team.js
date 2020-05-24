import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import TeamHeader from "../components/TeamHeader"
import TeamGrid from "../components/TeamGrid"
import DemoBanner from "../components/DemoBanner"

const team = () => {
  return (
    <Layout>
      <SEO title="team" />
      <TeamHeader></TeamHeader>
      <TeamGrid></TeamGrid>
      <DemoBanner></DemoBanner>
    </Layout>
  )
}

export default team

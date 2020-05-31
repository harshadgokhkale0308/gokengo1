import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import Header from "../components/Header"
import HeaderVideo from "../components/VideoHeader"
import Summary from "../components/summary"
import Features from "../components/Features"
import Impact from "../components/Impact"
import MissingLink from "../components/MissingLink"
import RequestDemo from "../components/RequestDemo"

const IndexPage = () => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <>
      {!hasMounted ? (
        <div className="loading">GokenGo.</div>
      ) : (
        <Layout>
          <SEO
            title="Home"
            description="The ultimate goal of any operations system – Manufacturing | Retail |
          Healthcare – is to be intelligent enough to discover knowledge, make
          decisions and deliver actions independently. GokenGO platform provides
          a framework to build such an intelligent system"
          />
          <Header></Header>
          <HeaderVideo></HeaderVideo>
          <Summary></Summary>
          <Features></Features>
          <Impact></Impact>
          <MissingLink></MissingLink>
          <RequestDemo></RequestDemo>
        </Layout>
      )}
    </>
  )
}

export default IndexPage

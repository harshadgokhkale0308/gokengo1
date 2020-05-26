import React from "react"
import SEO from "../components/seo"

// Components
import NavbarWhite from "../components/NavbarWhite"
import AboutHeader from "../components/AboutHeader"
import AboutSectionOne from "../components/AboutSectionOne"
import DemoBanner from "../components/DemoBanner"
import Footer from "../components/Footer"

const about = () => {
  return (
    <>
      <SEO title="about" />
      <NavbarWhite></NavbarWhite>
      <AboutHeader></AboutHeader>
      <AboutSectionOne></AboutSectionOne>
      <DemoBanner></DemoBanner>
      <Footer></Footer>
    </>
  )
}

export default about

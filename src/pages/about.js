import React, { useEffect, useState } from "react"
import SEO from "../components/seo"

// Components
import NavbarWhite from "../components/NavbarWhite"
import AboutHeader from "../components/AboutHeader"
import AboutSectionOne from "../components/AboutSectionOne"
import DemoBanner from "../components/DemoBanner"
import Footer from "../components/Footer"
import "../styles/main.scss"

const About = () => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <>
      {!hasMounted ? (
        <div className="loading">GokenGo.</div>
      ) : (
        <>
          <SEO title="about" />
          <NavbarWhite></NavbarWhite>
          <AboutHeader></AboutHeader>
          <AboutSectionOne></AboutSectionOne>
          <DemoBanner></DemoBanner>
          <Footer></Footer>
        </>
      )}
    </>
  )
}

export default About

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import "../styles/main.scss"
import gsap from "gsap"
import CSSPlugin from "gsap/CSSPlugin"

// Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  useEffect(() => {
    gsap.registerPlugin(CSSPlugin)
  })

  return (
    <div>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout

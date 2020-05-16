/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "../styles/main.scss"

// Components
import Navbar from "../components/Navbar"

const Layout = ({ children }) => {
  return (
    <div className="page_wrap">
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  )
}

export default Layout

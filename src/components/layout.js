/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import "../styles/main.scss"
// Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CookieBanner from "react-cookie-banner"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <CookieBanner
        message="This site uses cookies to provide you with a great user experience. By using GokenGo, you accept our use of cookies."
        onAccept={() => {}}
        cookie="user-has-accepted-cookies"
      />
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout

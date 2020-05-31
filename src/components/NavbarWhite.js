import { Link } from "gatsby"
import React from "react"
import GokenLogo from "../assets/logo.svg"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav_flex nav_white">
        <div className="logo">
          <Link to="/">
            <GokenLogo></GokenLogo>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <button
              onClick={() => scrollTo("#banner")}
              className="request_demo_btn"
            >
              Request a Demo
            </button>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

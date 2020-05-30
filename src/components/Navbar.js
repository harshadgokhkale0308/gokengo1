import { Link } from "gatsby"
import React from "react"
import GokenLogo from "../assets/logo_whiteBG.svg"
import scrollTo from "gatsby-plugin-smoothscroll"
import Fade from "react-reveal/Fade"

const Navbar = () => {
  return (
    <div className="container bg_transparent">
      <div className="nav_flex">
        <div className="logo">
          <Link to="/">
            <GokenLogo></GokenLogo>
          </Link>
        </div>
        <nav>
          <ul>
            <Fade top cascade>
              <li>
                <Link to="/about">about</Link>
              </li>
              <button
                onClick={() => scrollTo("#demo")}
                className="request_demo_btn"
              >
                Request a Demo
              </button>
            </Fade>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

import { Link } from "gatsby"
import React from "react"
import GokenLogo from "../assets/logoBlack.svg"

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav_flex">
        <div className="logo">
          <Link to="/">
            <GokenLogo></GokenLogo>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">services</Link>
            </li>
            <li>
              <Link to="/">product</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/team">team</Link>
            </li>
            <button className="request_demo_btn">Request a Demo</button>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

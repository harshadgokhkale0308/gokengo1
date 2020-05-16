import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav_flex">
        <div className="logo">Go.</div>
        <nav>
          <ul>
            <li>
              <Link to="/">services</Link>
            </li>
            <li>
              <Link to="/">services</Link>
            </li>
            <li>
              <Link to="/">services</Link>
            </li>
            <button className="request_demo_btn">Request a Demo</button>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

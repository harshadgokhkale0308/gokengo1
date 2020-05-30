import React, { useEffect } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import mockup from "../assets/mock.mp4"
import Fade from "react-reveal/Fade"

const Summary = () => {
  return (
    <div className="container bg_white">
      <div className="summary_wrapper">
        <div className="heading">
          <Fade bottom cascade>
            <p className="head_text">
              GokenGo is a 24 hour operations monitoring platform that enables
              huge savings powered by the built-in shift handover process.
            </p>
          </Fade>
          <Fade bottom>
            <p>
              Technology enabled by the internet and smartphones are ubiquitous
              in our personal lives. Why not use technology to empower us on the
              factory floor.
            </p>
          </Fade>
          <Fade bottom>
            <button onClick={() => scrollTo("#demo")} className="learn_how_btn">
              Learn How
            </button>
          </Fade>
        </div>
        <Fade bottom>
          <div className="summary_video_wrapper">
            <video autoPlay loop muted>
              <source src={mockup} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Summary

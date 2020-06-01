import React from "react"
import Fade from "react-reveal/Fade"

const AboutHeader = () => {
  return (
    <div className="container">
      <div className="about_header_wrapper">
        <div className="about_header">
          <h1>
            <Fade bottom cascade>
              <div className="inner_text">About GokenGo.</div>
            </Fade>
          </h1>
          <p>
            Until 2019, several industries regularly used data analytics to
            publish static reports and interactive dashboards. Covid-19 pandemic
            in 2020 changed how the world does business and demanded process
            changes. Post Covid-19 industry will be characterized by remote
            work, staggered workforce, social distancing and traceability of
            people and material.
            <br></br>
            GokenGO, a 24 hour operations platform was developed during the
            pandemic to ensure traceability of daily work, issues and people;
            while mapping your existing plants, lines and departments on our
            platform. Now you can safely handover your work and review your
            daily metrics without having to bring the entire team together in
            your control room.
          </p>
        </div>
        <div className="big_image_wrapper"></div>
      </div>
    </div>
  )
}
export default AboutHeader

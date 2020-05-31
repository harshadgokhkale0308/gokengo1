import React from "react"
import Fade from "react-reveal/Fade"

const AboutSectionOne = () => {
  return (
    <div className="container">
      <div className="about_section_one_wrapper">
        <div className="about_section_one">
          <h1>
            <Fade bottom cascade>
              <div className="section_one_inner_text">What We Do.</div>
            </Fade>
          </h1>
          <p>
            GokenGO was built by a team of passionate engineers and software
            developers at Goken. Goken is a technology company that helps our
            clients build better products. We do so by uncovering the root
            issues of inefficient processes and allowing our clients more time
            to imagine future innovations.
          </p>
        </div>
        <div className="image_grid_wrapper">
          <div className="big_image"></div>
          <div className="small_image"></div>
        </div>
      </div>
    </div>
  )
}
export default AboutSectionOne

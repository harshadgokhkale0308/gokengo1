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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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

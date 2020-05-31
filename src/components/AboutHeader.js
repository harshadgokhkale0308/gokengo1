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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="big_image_wrapper"></div>
      </div>
    </div>
  )
}
export default AboutHeader

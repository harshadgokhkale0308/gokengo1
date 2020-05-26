import React, { useEffect } from "react"
import { TimelineLite, Power3 } from "gsap"

const AboutHeader = () => {
  let tl = new TimelineLite()
  useEffect(() => {
    document.body.style.backgroundColor = "white"
    tl.to(".about_header_wrapper", 0.1, {
      css: { visibility: "visible" },
    })
      .from(".inner_text", 1, { y: 100, ease: Power3.easeOut })
      .from(
        ".about_header p",
        0.5,
        { opacity: 0, y: 20, ease: Power3.easeOut },
        "-=0.5"
      )
  }, [tl])

  return (
    <div className="container">
      <div className="about_header_wrapper">
        <div className="about_header">
          <h1>
            <div className="anim_text_wrapper">
              <div className="inner_text">About GokenGo.</div>
            </div>
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

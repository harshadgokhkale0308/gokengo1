import React, { useEffect, useRef } from "react"
import CSSRulePlugin from "gsap/CSSRulePlugin"
import { TimelineLite, Power3 } from "gsap"
import MainVideo from "../videos/main.mp4"

const Header = () => {
  let header = useRef(null)
  let tl = new TimelineLite()

  useEffect(() => {
    let imageReveal = CSSRulePlugin.getRule(".video-container:after")
    tl.to(header, 0, { css: { visibility: "visible" } })
      .from(imageReveal, 1.4, {
        width: "0%",
        transformOrigin: "bottom",
        ease: Power3.easeInOut,
      })
      .from(".text_wrap h1", 1, {
        y: 350,
        ease: Power3.easeOut,
      })
      .from(".header_wrapper p", 1, {
        opacity: 0,
        y: 60,
        ease: Power3.easeOut,
      })
  })

  return (
    <div className="container">
      <div className="header_wrapper" ref={el => (header = el)}>
        <div className="video_wrapper">
          <div className="video_content_wrapper">
            <div className="text_wrap">
              <h1>GokenGo.</h1>
            </div>
          </div>
          <div className="video-container">
            <video loop autoPlay muted>
              <source src={MainVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  )
}

export default Header

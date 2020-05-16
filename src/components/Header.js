import React, { useEffect, useRef } from "react"
import CSSPlugin from "gsap/CSSPlugin"
import { TimelineLite, Power3 } from "gsap"
import MainVideo from "../videos/main.mp4"
import gsap from "gsap"

const Header = () => {
  let header = useRef(null)
  let tl = new TimelineLite()

  useEffect(() => {
    gsap.registerPlugin(CSSPlugin)
    tl.to(header, 0, { css: { visibility: "visible" } })
      .to(".video_wrapper .revealer", 1.6, {
        height: "0",
        transformOrigin: "bottom",
        ease: Power3.easeInOut,
      })
      .from(".heading_wrapper h1", 1, {
        y: 350,
        ease: Power3.easeOut,
      })
      .from(".header_wrapper p", 0.7, {
        opacity: 0,
        y: 60,
        ease: Power3.easeOut,
      })
      .from(".header_wrapper form", 1, {
        opacity: 0,
        y: 60,
        ease: Power3.easeOut,
      })
  })

  return (
    <div className="container">
      <div className="header_wrapper" ref={el => (header = el)}>
        <div className="content_wrapper">
          <div className="heading_wrapper">
            <h1>GokenGo.</h1>
          </div>
          <div className="video_wrapper">
            <div className="revealer"></div>
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
        <form>
          <input
            type="text"
            name="email"
            placeholder="enter your email"
            className="input"
          ></input>
          <input className="button" type="submit"></input>
        </form>
      </div>
    </div>
  )
}

export default Header

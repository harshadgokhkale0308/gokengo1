import React, { useEffect, useRef } from "react"
import { TimelineLite, Power3 } from "gsap"
import MainVideo from "../videos/main.mp4"
import lottie from "lottie-web"

// Preloading Animation
import preloadingAnim from "../lottie/preloaderBlack.json"

const Header = () => {
  let preloaderContainer = useRef(null)
  let header = useRef(null)
  let tl = new TimelineLite()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: preloaderContainer,
      animationData: preloadingAnim,
      loop: false,
    })

    anim.setSpeed(2)

    tl.to(header, 0, { css: { visibility: "visible" } })
      .to(".video_wrapper .revealer", 1.6, {
        height: "0",
        transformOrigin: "bottom",
        ease: Power3.easeInOut,
        delay: 1.2,
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
  }, [tl])

  return (
    <div className="container">
      <div className="header_wrapper" ref={el => (header = el)}>
        <div className="content_wrapper">
          <div
            className="stomp_preloader"
            ref={el => (preloaderContainer = el)}
          ></div>
          {/* <div className="heading_wrapper"><h1>GokenGo.</h1></div> */}
          <div className="video_wrapper">
            <div className="revealer"></div>
            <video loop autoPlay muted>
              <source src={MainVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <p>
          The ultimate goal of any operations system – Manufacturing | Retail |
          Healthcare – is to be intelligent enough to discover knowledge, make
          decisions and deliver actions independently. GokenGO platform provides
          a framework to build such an intelligent system
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

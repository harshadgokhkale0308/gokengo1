import React, { useEffect, useRef } from "react"
import MainVideo from "../assets/smallVideo.mp4"
import lottie from "lottie-web"
import Fade from "react-reveal/Fade"

// Preloading Animation
import stompAnim from "../lottie/stompWhite.json"

const Header = () => {
  let stompContainer = useRef(null)

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: stompContainer,
      animationData: stompAnim,
      loop: false,
    })
    anim.setSpeed(2)
  }, [])

  return (
    <div className="container">
      <div className="header_wrapper">
        <div className="content_wrapper">
          <div
            className="stomp_preloader"
            ref={el => (stompContainer = el)}
          ></div>
          <div className="video_wrapper">
            <video loop autoPlay muted>
              <source src={MainVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <p>
          The ultimate goal of any operations system – Manufacturing to
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

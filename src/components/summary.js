import React, { useEffect } from "react"
import { TimelineLite, Power3 } from "gsap"
import { useInView } from "react-intersection-observer"
import mockup from "../assets/mock.mp4"

const Summary = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  let tl = new TimelineLite()
  useEffect(() => {
    if (inView) {
      tl.from(".heading p", 0.8, { opacity: 0, y: 20, ease: Power3.easeOut })
        .from(".summary_video_wrapper", 1, {
          opacity: 0,
          x: 200,
          ease: Power3.easeOut,
        })
        .from(
          ".below_video_text",
          0.6,
          {
            opacity: 0,
            y: 20,
            ease: Power3.easeOut,
          },
          "-=0.6"
        )
    }
  }, [inView, tl])

  return (
    <div className="container bg_white">
      <div className="summary_wrapper" ref={ref}>
        <div className="heading">
          <p className="head_text">
            GokenGo is a 24 hour operations monitoring platform that enables
            huge savings powered by the built-in shift handover process.
          </p>
          <p>
            Technology enabled by the internet and smartphones are ubiquitous in
            our personal lives. Why not use technology to empower us at works ?
          </p>
          <button className="learn_how_btn">Learn How</button>
        </div>
        <div className="summary_video_wrapper">
          <video autoPlay loop muted>
            <source src={mockup} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        >
      </div>
    </div>
  )
}

export default Summary

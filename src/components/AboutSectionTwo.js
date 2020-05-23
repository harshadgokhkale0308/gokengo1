import React, { useEffect } from "react"
import { TimelineLite, Power3 } from "gsap"
import { useInView } from "react-intersection-observer"

const AboutSectionTwo = () => {
  const [aboutSectionTwoRef, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  let tl = new TimelineLite()
  useEffect(() => {
    if (inView) {
      tl.staggerFrom(
        ".about_section_two_inner_text",
        1,
        { y: 100, ease: Power3.easeOut },
        0.2
      ).staggerFrom(
        ".about_features_inner_text",
        0.6,
        { y: 100, ease: Power3.easeOut },
        0.1,
        "-=1"
      )
    }
  }, [inView, tl])

  return (
    <div className="container" ref={aboutSectionTwoRef}>
      <div className="about_section_two_wrapper">
        <div className="about_section_two">
          <h1>
            <div className="about_section_two_inner_text">Features</div>
          </h1>
          <h1>
            <div className="about_section_two_inner_text">GokenGo</div>
          </h1>
          <h1>
            <div className="about_section_two_inner_text">Offers</div>
          </h1>
        </div>
        <div className="about_features">
          <ul>
            <li>
              <div className="about_features_inner_text">Record</div>
            </li>
            <li>
              <div className="about_features_inner_text">Aggregate</div>
            </li>
            <li>
              <div className="about_features_inner_text">Delegate</div>
            </li>
            <li>
              <div className="about_features_inner_text">Measure</div>
            </li>
            <li>
              <div className="about_features_inner_text">Analyze</div>
            </li>
            <li>
              <div className="about_features_inner_text">Act</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutSectionTwo

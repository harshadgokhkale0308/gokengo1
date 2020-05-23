import React, { useEffect } from "react"
import { TimelineLite, Power3 } from "gsap"
import { useInView } from "react-intersection-observer"

const AboutSectionOne = () => {
  const [aboutSectionOneRef, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  let tl = new TimelineLite()

  useEffect(() => {
    if (inView) {
      tl.from(".section_one_inner_text", 1, {
        y: 100,
        ease: Power3.easeOut,
      }).from(
        ".about_section_one p",
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
    <div className="container" ref={aboutSectionOneRef}>
      <div className="about_section_one_wrapper">
        <div className="about_section_one">
          <h1>
            <div className="section_one_inner_text">What We Do.</div>
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
